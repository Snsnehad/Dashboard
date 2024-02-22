import { Label } from "recharts";
import "./newproduct.css";

import React from "react";

export default function () {
  return (
    <div className="newProduct">
      <div className="productTitle">New Product</div>
      <form className="productForm">
        <div className="imageUpload">
          <label for="file">Image</label>
          <input type="file" id="file" />
        </div>
        <div className="formItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="formItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="formItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="productButton">Create</button>
      </form>
    </div>
  );
}
