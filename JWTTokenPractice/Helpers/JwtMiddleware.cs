using System.IdentityModel.Tokens.Jwt;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Options;
using System;
using System.Linq;
using System.Text;
using Transflower.JWTToken.Services;


namespace Transflower.JWTToken.Helper
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly AppSetting _appSetting;

        public JwtMiddleware(RequestDelegate next, IOptions<AppSetting> appSetting)
        {
            _next = next;
            _appSetting = appSetting.Value;
        }

        public async Task Invoke(HttpContext context, IUserService userService)
        {
            
            var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
            Console.WriteLine("Extracting token : "+token);
            if (token != null)
                attachUserToContext(context, userService, token);

            await _next(context);
        }

        private void attachUserToContext(HttpContext context, IUserService userService, string token)
        {
            try
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_appSetting.TokenKey);
                Console.WriteLine(" InMiddleware key " +key);
                tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    // set clockskew to zero so tokens expire exactly at token expiration time (instead of 5 minutes later)
                    ClockSkew = TimeSpan.Zero
                }, out SecurityToken validatedToken);

                var jwtToken = (JwtSecurityToken)validatedToken;
                var userId = int.Parse(jwtToken.Claims.First(x => x.Type == "id").Value);

                // attach user to context on successful jwt validation
                Console.WriteLine("UserId : "+userId);
                context.Items["User"] = userService.GetByID(userId);
               
            }
            catch
            {
                // do nothing if jwt validation fails
                // user is not attached to context so request won't have access to secure routes
            }
        }
    }
}