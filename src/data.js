import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Julian",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Temi",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Razer Viper Ultimate",
      category: "Mouse",
      image:
        "https://assets.kogan.com/files/product/etail/Razer-/RAZ-RZ01-03050100_1.jpg?auto=webp&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753",
      price: 135.99,
      countInStock: 10,
      brand: "Razer",
      rating: 5,
      numReviews: 22,
      description:
        "In our humble opinion, this is the best gaming mouse on the market right now!",
    },
    {
      name: "Razer Mamba",
      category: "Mouse",
      image:
        "https://s3-ap-southeast-1.amazonaws.com/qisahn-upgrade-production/public/spree/products/29977/large/razer_mamba_wireless_righthanded_wireless_gaming_mouse_frml_packaging_1564559820.jpg?1564559819",
      price: 80.95,
      countInStock: 23,
      brand: "Razer",
      rating: 4.0,
      numReviews: 13,
      description: "Not a bad mouse at all give it a try",
    },
    {
      name: "Logitech G903 LIGHTSPEED",
      category: "Mouse",
      image:
        "https://resource.logitechg.com/content/dam/gaming/en/products/g903/g903-gallery-1.png",
      price: 95.0,
      countInStock: 3,
      brand: "Logitech",
      rating: 4.5,
      numReviews: 10,
      description: "Not a bad mouse at all give it a try",
    },
    {
      name: "Logitech G PRO Wireless",
      category: "Mouse",
      image:
        "https://dlb99j1rm9bvr.cloudfront.net/logitech-pro-wireless-mouse/parts/angle-1/model/size-1000/bg.png",
      price: 95.95,
      countInStock: 0,
      brand: "Logitech",
      rating: 4.5,
      numReviews: 17,
      description: "Not a bad mouse at all give it a try",
    },
    {
      name: "Logitech G915 LIGHTSPEED",
      category: "Keyboard",
      image:
        "https://www.logitechg.com/content/dam/gaming/en/products/g915-tkl/g915-tkl-gallery/deu-g915-tkl-carbon-gallery-topdown.png",
      price: 195.99,
      countInStock: 15,
      brand: "Logitech",
      rating: 4.5,
      numReviews: 12,
      description: "Not a bad keyboard at all give it a try",
    },
    {
      name: "Razer BlackWidow Elite",
      category: "Keyboard",
      image:
        "https://www.topocentras.lt/cdn-cgi/image/fit=contain,format=auto,quality=80/media/catalog/product/b/w/bw_elite_2018_render_02_217204_1546000295.png",
      price: 124.89,
      countInStock: 13,
      brand: "Razer",
      rating: 4.5,
      numReviews: 14,
      description: "Not a bad keyboard at all give it a try",
    },
  ],
};

export default data;
// module.exports = data;
