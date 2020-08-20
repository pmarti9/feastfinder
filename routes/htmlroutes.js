const path = require("path")
const isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = function(app) {
    app.get("/", (req, res) => {
        res.render("Landing",{});
      });
      

      app.get("/Register", (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
          res.redirect("/Members");
        }
        res.render("Register",{});
      });
      
    
      
      app.get("/Login", (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {

          res.redirect("/UserPage");

        }
        res.sendFile(path.join(__dirname, "../client/src/Components/Login.Login.jsx"));
        // res.sendFile(path.join(__dirname, "../src/pages/login.html"));
      });
      app.get("/RecipeSearch", isAuthenticated, (req, res)=>{
        res.render(("RecipeSearch"))

      })
      app.get("/UserPage", isAuthenticated, (req, res)=>{
        res.render(("UserPage"))

      })
      app.get("/IngredientSearch", isAuthenticated, (req, res)=>{
        res.render(("IngredientSearch"))

      })
    
      // Here we've add our isAuthenticated middleware to this route.
      // If a user who is not logged in tries to access this route they will be redirected to the signup page
      app.get("/UserPage", isAuthenticated, (req, res) => {
        res.render("UserPage",{});
      });
}