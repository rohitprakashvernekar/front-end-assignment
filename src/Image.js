import { React, useState, useEffect } from "react";
import "./Image.css";
import "./warning.png";
import { FaExclamationTriangle } from "react-icons/fa";
const imageArr = [
  {
    url: "https://cdn.quicksell.co/-LfPe0CWGEWcVYQTYbDw/products/-MVpx91iKhzu-4c2hPFN.jpg",
    error: false,
    ready: false,
  },
  {
    url: "https://cdn.quicksell.co/-LfPe0CWGEWcVYQTYbDw/products/-MVpx91hJWM9aEdBMICb.jpg",
    error: false,
    ready: false,
  },
  {
    url: "https://cdn.quicksell.co/-LfPe0CWGEWcVYQTYbDw/products/-MVpx91j5-eCEW5j1nOY.jpg",
    error: false,
    ready: false,
  },
  {
    url: "https://cdn.quicksell.co/-LfPe0CWGEWcVYQTYbDw/products/-MVpx91hJWM9aEdBMICd.jpg",
    error: false,
    ready: false,
  },
];

const ImageComponent = () => {
  const [imgsLoaded, setImgsLoaded] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image);
          }, 2000);

        loadImg.onerror = (err) => reject(image);
      });
    };

    Promise.all(imageArr.map((image) => loadImage(image)))
      .then((result) => {
        setImgsLoaded(true);

        let readyImageArr = result.map((imgA) => {
          imgA.ready = true;
          return imgA;
        });
        setProduct({
          name: "test_design",
          count: result.length,
          image: readyImageArr,
        });
        console.log(result);
      })
      .catch((result) => {
        console.log("Failed to load images", result);
        let errorimageArr = imageArr.map((imgObj) => {
          if (imgObj.url === result.url) {
            imgObj.error = true;
            return imgObj;
          }
          return imgObj;
        });
        setProduct({
          name: "test_design",
          count: errorimageArr.length,
          image: errorimageArr,
        });
      });
  }, []);
  return (
    <div
      style={{
        height: "150px",
        width: "500px",
        background: "black",
        display: "flex",
      }}
      className="main"
    >
      <div className="leftcontainer">
        {product.image !== undefined &&
        product.image[0].error &&
        product.image[0].ready === false ? (
          <div
            style={{
              height: "38px",
              width: "38px",
              borderRadius: "50%",
              border: "2px dotted white",
            }}
          >
            <FaExclamationTriangle />
          </div>
        ) : (
          product.image !== undefined && (
            <img alt="mask"
              className="top"
              style={{
                height: "38px",
                width: "38px",
                borderRadius: "50%",
                border: "2px solid white",
              }}
              src={product.image[0].url}
            />
          )
        )}
        {product.image !== undefined &&
        product.image[1].error &&
        product.image[1].ready === false ? (
          <div
            style={{
              height: "38px",
              width: "38px",
              borderRadius: "50%",
              border: "2px dotted white",
            }}
          >
            <FaExclamationTriangle />
          </div>
        ) : (
          product.image !== undefined && (
            <img alt="mask"
              className="top"
              style={{
                height: "38px",
                width: "38px",
                borderRadius: "50%",
                border: "2px solid white",
              }}
              src={product.image[1].url}
            />
          )
        )}
        {product.image !== undefined &&
        product.image[2].error &&
        product.image[2].ready === false ? (
          <div
            style={{
              height: "38px",
              width: "38px",
              borderRadius: "50%",
              border: "2px dotted white",
            }}
          >
            <FaExclamationTriangle />
          </div>
        ) : (
          product.image !== undefined && (
            <img alt="mask"
              className="bottom"
              style={{
                height: "38px",
                width: "38px",
                borderRadius: "50%",
                border: "2px solid white",
              }}
              src={product.image[2].url}
            />
          )
        )}
        {product.image !== undefined &&
        product.image[3].error &&
        product.image[3].ready === false ? (
          <div
            style={{
              height: "38px",
              width: "38px",
              borderRadius: "50%",
              border: "2px dotted white",
            }}
          >
            <FaExclamationTriangle />
          </div>
        ) : (
          product.image !== undefined && (
            <img alt="mask"
              className="bottom"
              style={{
                height: "38px",
                width: "38px",
                borderRadius: "50%",
                border: "2px solid white",
              }}
              src={product.image[3].url}
            />
          )
        )}
      </div>
      <div className="text" style={{ fontSize: "small" }}>
        {product.name} <br />
        {product.count}
      </div>
      <div className="rightcontainer">
        <div className="outer">
          <FaExclamationTriangle />
        </div>
      </div>
    </div>
  );
};
export default ImageComponent;
