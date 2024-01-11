import React from "react";
import "../styles/home.css";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
const Home = () => {
  const images = [
    {
      title: "learn",
      image:
        "https://kinsta.com/wp-content/uploads/2023/04/wordpress-react.jpg?d=400x600",
    },
    {
      title: "practice",
      image:
        "https://cdn.mos.cms.futurecdn.net/icGDiWLHrJKCndTu29s764-1200-80.jpg?d=324x406",
    },
    {
      title: "mentorships",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgXR0e_3Zeez5WOzFMwuoYfuL0MUYtJ2dQTc5Nw4VltQ&s?d=324x406",
    },
    {
      title: "compete",
      image:
        "https://www.slideegg.com/image/catalog/71635-achievement%20ppt%20templates.png?d=324x406",
    },
    {
      title: "jobs",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5LomzCREeYS57ZbR0PR0hAxQJSA-O_0a3g&usqp=CAU?d=324x406",
    },
    {
      title: "blogs",
      image:
        "https://content-writing-india.com/blog/wp-content/uploads/2018/03/1080px.jpg?d=324x406",
    },
  ];

  return (
    <section className="home">
      <div className="home-container container">
        <div className="home-left">
          <h1 style={{ display: "flex", alignItems: "center" }}>
            Connecting
            <AvatarGroup
              style={{
                marginLeft: "10px",
                borderStyle: "dotted",
                borderRadius: "40px",
                color: "black",
              }}
            >
              <Avatar
                image="https://thumbs.dreamstime.com/b/d-avatar-illustrat…ansparent-png-background-generative-272798686.jpg"
                size="small"
                shape="circle"
              />
              <Avatar
                image="https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-fashion-boy-avatar-png-image_6514592.png"
                size="small"
                shape="circle"
              />
              <Avatar
                image="https://img.freepik.com/premium-photo/fun-3d-carto…illustration-indian-businessman_183364-114489.jpg"
                size="small"
                shape="circle"
              />
            </AvatarGroup>
          </h1>
          <strong style={{ color: "#1E1E1E", fontSize: "40px" }}>
            Talent, Colleges, Recruiters
          </strong>
          <p>
            <br />
            Explore opportunities from across the globe to learn, showcase
            skills, gain CV points, & get hired by your dream company.
          </p>
        </div>
        <div className="home-right">
          <div className="home-right-images">
            {images.map((item) => (
              <div className="home-image" key={item.image}>
                <span>{item.title}</span>
                <img src={item.image} alt={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
