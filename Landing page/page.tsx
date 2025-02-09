import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Settings } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="font-bold text-xl">Sustainable Tourism </div>
        <nav className="hidden md:flex space-x-8">
          {/* <a href="#" className="text-gray-600 hover:text-orange-500">
            Home
          </a> */}
          <a href="#" className="text-gray-600 hover:text-orange-500">
            About
          </a>
          <a href="http://10.120.109.123:3000" target="_blank">
            Go to Travel Advisor
          </a>
          <a
            href="http://127.0.0.1:5501/index.html"
            target="_blank"
           
          >
            Enroute
          </a>
          <a
            href="http://127.0.0.1:5500/index.html"
            target="_blank"
            
          >
            Wheelchair Accessibility
          </a>

        </nav>
        {/* <Button className="bg-orange-500 hover:bg-orange-600">Sign Up</Button> */}
      </header>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Get started your exciting journey with us
          </h1>
          <p className="text-gray-600">
            A team of experienced tourism professionals will provide you with
            the best advice and tips.
          </p>
          {/* <Button className="bg-orange-500 hover:bg-orange-600"> */}
          {/* Discover Now */}
          {/* </Button> */}
        </div>
        <div className="relative h-[400px]">
          <Image
            src="/travel.jpg"
            alt="Travel illustration"
            fill
            className="object-contain"
          />
        </div>
      </section>
      {/* Things to do Section */}
      {/* <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Things you need to do
        </h2>
        <p className="text-gray-600 text-center mb-12">
          We ensure the best experiences for your travel
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <MapPin className="h-8 w-8 text-orange-500" />,
              title: "Choose Destination",
              description:
                "Explore various destinations to find the perfect spot for your next adventure.",
            },
            {
              icon: <Calendar className="h-8 w-8 text-orange-500" />,
              title: "Pick Date",
              description:
                "Select dates that fit your schedule and align with the best times to visit.",
            },
            {
              icon: <Settings className="h-8 w-8 text-orange-500" />,
              title: "Book Now",
              description:
                "Secure your reservations early to ensure availability and get the best rates.",
            },
          ].map((item, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="space-y-4 pt-6">
                {item.icon}
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">Get to know India More</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              imageSrc: "/tajmahal.jpg",
              altText: "Taj Mahal",
              destination: "Agra",
              description:
                "Explore the timeless beauty of the Taj Mahal with a guided tour, including a visit to Agra Fort and local markets.",
            },
            {
              imageSrc: "/jaipur.jpg",
              altText: "Jaipur",
              destination: "Jaipur",
              description:
                "Discover the royal heritage of Jaipur with visits to Amber Fort, City Palace, and Hawa Mahal.",
            },
            {
              imageSrc: "/kerala.jpg",
              altText: "Kerala",
              destination: "Kerala",
              description:
                "Experience the serene backwaters of Kerala with a houseboat stay and traditional Ayurvedic treatments.",
            },
            {
              imageSrc: "/varansai.jpg",
              altText: "Varanasi",
              destination: "Varanasi",
              description:
                "Immerse yourself in the spiritual aura of Varanasi with a Ganges boat ride and visits to ancient temples.",
            },
          ].map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{item.destination}</h3>
                <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Best Vacation Plan */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">Best Vacation Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              imageSrc: "/goa.jpg",
              altText: "Goa Beach Retreat",
              title: "Goa Beach Retreat",
              description:
                "Relax on the stunning beaches of Goa with a 7-day all-inclusive package, including water sports, guided tours, and traditional Goan cuisine.",
            },
            {
              imageSrc: "/himalayan.jpg",
              altText: "Himalayan Adventure",
              title: "Himalayan Adventure",
              description:
                "Embark on a thrilling 10-day journey through the Himalayas, featuring guided treks, scenic mountain views, and cozy stays in hill resorts.",
            },
            {
              imageSrc: "/rs.jpg",
              altText: "Ranthambore Safari",
              title: "Ranthambore Safari",
              description:
                "Join a 12-day safari in Ranthambore National Park, with opportunities to witness Bengal tigers, explore ancient forts, and stay in luxury jungle lodges.",
            },
          ].map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">What People Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote:
                "Amazing experience! The team made our trip unforgettable.",
              name: "John Doe",
              role: "Traveler",
            },
            {
              quote:
                "Great service, very helpful with any questions. Always returned the couple of phone calls I made, thank you Nicole.",
              name: "Maree Ellen Stewart",
              role: "Traveler",
            },
            {
              quote:
                "I was really happy with the service provided. The team gave prompt service to my enquiries and I was really happy with all the communications provided. Great deal.",
              name: "Sonya Sherman",
              role: "Traveler",
            },
            {
              quote:
                "Fantastic service before leaving and everything went smoothly when we were away.",
              name: "Melinda Kopp",
              role: "Traveler",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="p-6">
              <CardContent className="space-y-4">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">
          Go explore with these destinations
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              imageSrc: "/Udaipur.jpg",
              altText: "Rishikesh, India",
              name: "Udaipur, India",
            },
            {
              imageSrc: "/Rishikesh.jpg",
              altText: "Rishikesh , India",
              name: "Rishikesh , India",
            },
            {
              imageSrc: "/Jodghpur.jpg",
              altText: "Jodhpur , India",
              name: "Jodhpur , India",
            },
            {
              imageSrc: "/leh.jpg",
              altText: "Leh-Ladakh , India",
              name: "Leh-Ladakh , India",
            },
          ].map((destination, index) => (
            <div
              key={index}
              className="relative h-48 rounded-lg overflow-hidden"
            >
              <Image
                src={destination.imageSrc}
                alt={destination.altText}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60">
                <p className="text-white font-semibold">{destination.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Newsletter */}
      {/* <section className="bg-orange-500 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Subscribe and get exclusive deals & offers
            </h2>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="bg-white" />
              <Button className="bg-black hover:bg-gray-800 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section> */}
      {/* Footer */}
      {
        /* <footer className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-xl">Travel</h3>
              <p className="text-gray-600">
                Book your trip in minutes, get full control for much longer.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="/pages/about" className="hover:text-orange-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Mobile
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Affiliates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">More</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Airlines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Airfees
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Lowfare Tips
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer> */
        <footer className="bg-gray-50 py-6 text-center">
          <div className="container mx-auto px-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Sustainable Tourism. All rights
              reserved.
            </p>
          </div>
        </footer>
      }
    </div>
  );
}
