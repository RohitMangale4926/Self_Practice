using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Transflower.JWTToken.Entities;
using Microsoft.AspNetCore.Http;
using System;
namespace Transflower.JWTToken.Helper{

    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class AuthorizeAttribute : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
        
            var user=(User)context.HttpContext.Items["User"];
            Console.WriteLine(" User : "+user);
            if (user ==null){
            context.Result=new JsonResult(new{message="UnauthorizedAccess"}){ StatusCode = StatusCodes.Status401Unauthorized };
        }
    }
    }
}