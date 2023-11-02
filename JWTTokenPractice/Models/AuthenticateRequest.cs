using System.ComponentModel.DataAnnotations;

namespace Transflower.JWTToken.Models{
    public class AuthenticateRequest{
        [Required]
        public string Username {get; set;}

        [Required]
        public string Password{get;set;}
    }
}