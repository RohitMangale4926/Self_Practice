using Transflower.JWTToken.Entities;
using Transflower.JWTToken.Models;

namespace Transflower.JWTToken.Services{
    public interface IUserService{
        AuthenticateResponse Authenticate(AuthenticateRequest model);
        IEnumerable<User> GetAll();
        User GetByID(int id);
    }
}