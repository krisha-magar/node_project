
const home = (req, res) => {
  res.render("pages/home", {
    pageTitle: "Home Page",
    body: "This is example of home page!",
  });
};
const dashboard = (req, res) => {
  res.render("pages/dashboard", {
    pageTitle: "Dashboard",
    body: "This is dashboard",
  });
};


// const registerView = (req, res) => {
//   res.render("pages/register", { pageTitle: "Register" });
// };

// const register = async (req, res) => {
//   try {
//     await create(req.body);
//     req.flash('alert',{
//       type: 'sucess',
//       messsage: "Registration sucessful!"
//     })
//     res.redirect("/");
//   } catch (e) {
//     req.flash('alert', {
//       type: 'danger',
//       messsage: "Registration unsucessful!"
//     })
//     //console.log("🚀 ~ file: home-controller.js ~ line 19 ~ register ~ e", e);
//     res.redirect("/");
//   }
// };

module.exports = {
  home,
  dashboard,
};