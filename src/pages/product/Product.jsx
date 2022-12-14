import React from 'react';
import "./product.scss";
import { Link } from 'react-router-dom';
import ChartP from '../../components/chart/ChartP';
import {productData} from "../../dummyData";
import PublishIcon from '@mui/icons-material/Publish';

import q1 from "../../asset/q1.jpg";


const Product = () => {
  return (
    <div className="product">
      <div className="top">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="addButton">Create</button>
        </Link>
      </div>
      <div className="chart1">
        <ChartP data={productData} dataKey1="Sales" title="Sales Performance"/>
      </div>
      <div className='bottom'>
        <div className="info1">
                <div className="InfoTop">
                    <img src={q1}alt="" className="productInfoImg" />
                    <span className="productName">Casio</span>
                </div>
                <div className="InfoBottom">
                    <div className="InfoItem">
                        <span className="InfoKey">id:</span>
                        <span className="InfoValue">123</span>
                    </div>
                    <div className="InfoItem">
                        <span className="InfoKey">sales:</span>
                        <span className="InfoValue">5123</span>
                    </div>
                    <div className="InfoItem">
                        <span className="InfoKey">active:</span>
                        <span className="InfoValue">yes</span>
                    </div>
                    <div className="InfoItem">
                        <span className="InfoKey">in stock:</span>
                        <span className="InfoValue">no</span>
                    </div>
                </div>
        </div>
        <div className="Form1">
                    <label>Product Name</label>
                    <input type="text" placeholder="Casio" />
                    <label>In Stock</label>
                    <select name="inStock" id="idStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
        </div>
        <div className="Form2">
          <div className="productUpload">
            <img src={q1} alt="" className="productUploadImg" />
            <label className='pub' for="file">
              <PublishIcon />
            </label>
            <input type="file" id="file" style={{display:"none"}} />
          </div>
          <button className="productButton">Update</button>
        </div>
      </div>
    </div>
  )
}

export default Product;