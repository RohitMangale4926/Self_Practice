using Microsoft.AspNetCore.Mvc;
using Transflower.JWTToken.Helper;
using Transflower.JWTToken.Models;
using Transflower.JWTToken.Services;


namespace Transflower.JWTToken.Controller{
    [ApiController]
    [Route("[controller]")]
    public class UserController:ControllerBase{
        private IUserService _userService;

        public UserController(IUserService userService){
            _userService=userService;
        }
        
        [HttpPost("authenticate")]
        public IActionResult Authenticate (AuthenticateRequest model){
            Console.WriteLine("model : "+model.Username+" "+model.Password);
            var response=_userService.Authenticate(model);
            if(response==null)
            Console.WriteLine("Response : "+response.Username);
            if(response == null) 
            return BadRequest(new{message="Username and password are incorrect"});
            return Ok(response);
            
        }

        [Authorize]
        [HttpGet]
        public IActionResult GetAll()
        {
            
            var users = _userService.GetAll();
            Console.WriteLine("Calling Users : ");
            return Ok(users);
        }

       [Authorize]  
       [HttpGet("{id}")]      
        public IActionResult GetByID(int id){
            var user=_userService.GetByID(id);
            return Ok(user);
        }

    }
}