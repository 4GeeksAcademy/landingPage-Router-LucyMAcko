import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const Home = () => {

	const cardPict1 ="https://picsum.photos/id/8/400";
	const cardPict2 ="https://picsum.photos/id/20/400";
	const cardPict3 ="https://picsum.photos/id/30/400";
	const cardPict4 ="https://picsum.photos/id/96/400";

	return (
		<div className="container-fluid">
			<Navbar title="Start Bootstrap" />	
			<Jumbotron title="A Warm Welcome" description="Donec sollicitudin justo sit amet ex sollicitudin pretium. Curabitur eros nunc, dictum id nisl quis, euismod luctus neque. Aenean dictum pharetra justo, a ornare dolor finibus ac. Pellentesque elementum sapien ac justo sodales pharetra. Aliquam tincidunt ut erat consequat pretium. Suspendisse molestie libero id sodales luctus. Curabitur convallis eget mi nec pretium. Integer interdum imperdiet lacus sit amet posuere." buttonTitle="Call To Action!"/>
			<Card cardPict1={cardPict1} cardPict2={cardPict2} cardPict3={cardPict3} cardPict4={cardPict4} title="Card Title" textBody="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." buttonLabel="Find out more!"/>
			<Footer textFooter="&copy; 2023 LucyLu, Inc"/>
		</div>
	);
};

export default Home;



