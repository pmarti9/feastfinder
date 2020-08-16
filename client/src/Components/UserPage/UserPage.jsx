import React from "react";
// import "./UserPage.css";


function UserPage() {
    return(
        <div>
            <ul>
                <li>
                    Email Address/UserName:
                </li>
            </ul>
           <table id="userRecipes">
               <tr>
                   <td>
                       Recipe Name
                   </td>
                   <td>
                       Ingredients
                   </td>
                   <td>
                       CookTime
                   </td>
                   <td>
                        Temperature
                   </td>
                   </tr>
           </table>
        </div>
    );
}

export default UserPage;