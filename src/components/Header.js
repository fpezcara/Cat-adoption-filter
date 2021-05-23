import React from "react";
import catPicMain from "../img/main_img.jpg";

const Header = () => {
  return (
    <div className="row bg-warning mt-5">
      <div className="col-md-6 py-3 ">
        <h3 className="display-4 text-info">Adopt a kitten</h3>
        <h5 className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h5>
        <p>
          <small>
            Suspendisse auctor urna blandit ultricies maximus. Sed accumsan
            auctor lacus ac mattis. Mauris at nibh purus. Nullam vulputate, urna
            value facilisis eleifend, nisl turpis suscipit augue, eget tincidunt
            velit nunc ut lectus. Phasellus viverra nec augue at iaculis. Nullam
            scelerisque tincidunt sapien vitae sodales. Sed tristique ut nulla a
            ultricies. Aliquam sit amet sodales elit, et pellentesque lorem.
            Praesent quis nibh value arcu porta lobortis. Morbi rutrum ut risus
            sed hendrerit. Integer laoreet odio nec nisi varius, at scelerisque
            nisi rhoncus. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam dolorum temporibus fuga voluptatum vero, dolore
            tempore neque saepe quo reiciendis?
          </small>
        </p>
      </div>
      <div className="col-md-6 col-fluid px-0">
        <img className="img-fluid" src={catPicMain} alt="cat" />
      </div>
    </div>
  );
};

export default Header;
