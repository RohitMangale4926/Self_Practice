using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Linq;
using System.Text;
using Microsoft.Extensions.Options;
using Transflower.JWTToken.Entities;
using Transflower.JWTToken.Helper;
using Transflower.JWTToken.Models;


namespace Transflower.JWTToken.Services{
    public class UserService : IUserService
    {
        private List<User> _users = new List<User>
        {
            new User { Id = 1, FirstName = "Ganesh", LastName = "Shinde", 
                        Username = "ganesh", Password = "test" },
            new User { Id = 2, FirstName = "Ankur", LastName = "Prasad", 
                        Username = "ankur", Password = "test" },
            new User { Id = 3, FirstName = "Neha", LastName = "Bhor", 
                        Username = "neha", Password = "test" },
            new User { Id = 4, FirstName = "Vishwambhar", LastName = "Kapre", 
                        Username = "vishwambhar", Password = "test" }
        };
        private readonly AppSetting _appSetting;

        public UserService (IOptions<AppSetting> appSetting){
            _appSetting=appSetting.Value;
        }
        public AuthenticateResponse Authenticate(AuthenticateRequest model)
        {
            Console.WriteLine(" UserService model : "+model.Username+" Password "+model.Password);
            var user=_users.SingleOrDefault(x => x.Username == model.Username && x.Password==model.Password);
            Console.WriteLine(" UserService user : "+user.Username+" Password "+user.Password);
            if (user == null) return null;
            var token = generateJwtToken(user);
            Console.WriteLine(" Token ; "+token);
            return new AuthenticateResponse(user, token);
        }

        public IEnumerable<User> GetAll()
        {
            return _users;
        }

        public User GetByID(int id)
        {
             return _users.FirstOrDefault(x => x.Id == id);
        }

        private string generateJwtToken(User user){
            var tokenHandler= new JwtSecurityTokenHandler();
            var key=Encoding.ASCII.GetBytes(_appSetting.TokenKey);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", user.Id.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), 
                                                            SecurityAlgorithms.HmacSha256Signature)
            };

            var token=tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);

        }
    }
}
