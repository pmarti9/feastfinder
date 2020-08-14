import React from "react";

// React-Bootstrap elements
import * as ReactBootstrap from "react-bootstrap";
// React-Bootstrap-Table2
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// CSS
import "./UserPage.css";


function UserPage() {
    return(
       <div>
           <ReactBootstrap.Row>
           <ReactBootstrap.Col className="IngredientsSearchCol">
           <ReactBootstrap.Container className="searchIngredientContain">

           {/* <ReactBootstrap.table class="ReactBootstrap.table table-striped">
						<thead>
							<tr>
								<th>Name</th>
								<th># of Posts</th>
								<th>See Author's Posts</th>
								<th>New Post</th>
								<th>Delete Author</th>
							</tr>
						</thead>
						<tbody>
							<tr id="form-row">
								<form id="author-form">
									<td colspan="4">
										<input placeholder="Enter a name" id="author-name" type="text" />
									</td>
									<td><button type="submit" class="btn btn-success">Create Author</button>
									</td>
								</form>
							</tr>
						</tbody>
					</ReactBootstrap.table> */}

           </ReactBootstrap.Container>
           </ReactBootstrap.Col>
           <ReactBootstrap.Col className="recipesWidget">

           </ReactBootstrap.Col>
           </ReactBootstrap.Row>
       </div>       
    );
}

export default UserPage;