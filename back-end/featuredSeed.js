const mongoose = require("mongoose");
const db = require("./models");
const dotenv = require("dotenv");
dotenv.config();


mongoose.connect(
    process.env.LOCAL_DB_KEY
    );

const featuredSeed = [
  {
    name: "John Smith",
    job:"Carpenter",
    description: "n convallis vestibulum elit. Ut iaculis leo interdum, consectetur elit ut, egestas purus.",
    img_src: "https://randomuser.me/api/portraits/men/41.jpg",
    body:
    "In convallis vestibulum elit. Nullam condimentum luctus eleifend. Donec condimentum sem vel erat pharetra convallis. Ut iaculis leo interdum, consectetur elit ut, egestas purus. Donec non justo posuere, finibus risus tristique, vestibulum ex. Nam suscipit mattis elementum. Sed blandit tortor augue, ut scelerisque felis ultrices quis. Ut efficitur nisi ut sollicitudin rutrum. Vivamus bibendum pretium dui ut consequat. Pellentesque ullamcorper odio non mi commodo, vel vestibulum ipsum laoreet. Duis nunc nibh, placerat a metus ac, pharetra tincidunt nisi. Donec sapien dui, condimentum in consectetur at, convallis sit amet sapien. Donec commodo leo vitae eros venenatis hendrerit. Duis nec tortor nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id suscipit erat. Suspendisse vestibulum porta lorem finibus suscipit. In hac habitasse platea dictumst. Morbi auctor dapibus neque, eget rhoncus est porttitor quis. Ut neque mauris, tempor vel libero sed, pretium fermentum odio. Nam non efficitur nunc. Proin ac urna in lacus scelerisque scelerisque. Vivamus faucibus est sit amet nibh feugiat, ac facilisis lacus consectetur. Curabitur pellentesque mauris non fringilla pellentesque. Nam fringilla orci metus, quis feugiat turpis venenatis at. Nulla dui orci, consequat non sem vel, vestibulum gravida risus. Vivamus sagittis gravida lorem mattis pellentesque. Curabitur ac cursus libero, in rhoncus risus. Mauris vel ornare leo. Nunc blandit ultrices consectetur. Morbi id tincidunt justo. Vestibulum imperdiet dignissim sem quis fringilla. Praesent vulputate metus ac facilisis bibendum. Nam iaculis, libero et volutpat dignissim, mi nulla feugiat felis, quis interdum erat augue ac nisi. Fusce cursus tempus luctus.",
    external_link: "https://www.google.com/",

  },
  {
    name: "Annie Beck",
    job:"Occupational Therapist",
    description: "n convallis vestibulum elit. Ut iaculis leo interdum, consectetur elit ut, egestas purus.",
    img_src: "https://randomuser.me/api/portraits/women/2.jpg",
    body:
    "In convallis vestibulum elit. Nullam condimentum luctus eleifend. Donec condimentum sem vel erat pharetra convallis. Ut iaculis leo interdum, consectetur elit ut, egestas purus. Donec non justo posuere, finibus risus tristique, vestibulum ex. Nam suscipit mattis elementum. Sed blandit tortor augue, ut scelerisque felis ultrices quis. Ut efficitur nisi ut sollicitudin rutrum. Vivamus bibendum pretium dui ut consequat. Pellentesque ullamcorper odio non mi commodo, vel vestibulum ipsum laoreet. Duis nunc nibh, placerat a metus ac, pharetra tincidunt nisi. Donec sapien dui, condimentum in consectetur at, convallis sit amet sapien. Donec commodo leo vitae eros venenatis hendrerit. Duis nec tortor nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id suscipit erat. Suspendisse vestibulum porta lorem finibus suscipit. In hac habitasse platea dictumst. Morbi auctor dapibus neque, eget rhoncus est porttitor quis. Ut neque mauris, tempor vel libero sed, pretium fermentum odio. Nam non efficitur nunc. Proin ac urna in lacus scelerisque scelerisque. Vivamus faucibus est sit amet nibh feugiat, ac facilisis lacus consectetur. Curabitur pellentesque mauris non fringilla pellentesque. Nam fringilla orci metus, quis feugiat turpis venenatis at. Nulla dui orci, consequat non sem vel, vestibulum gravida risus. Vivamus sagittis gravida lorem mattis pellentesque. Curabitur ac cursus libero, in rhoncus risus. Mauris vel ornare leo. Nunc blandit ultrices consectetur. Morbi id tincidunt justo. Vestibulum imperdiet dignissim sem quis fringilla. Praesent vulputate metus ac facilisis bibendum. Nam iaculis, libero et volutpat dignissim, mi nulla feugiat felis, quis interdum erat augue ac nisi. Fusce cursus tempus luctus.",
    external_link: "https://www.google.com/",

  },
  {
    name: "Teresa Hudson",
    job:"Architect",
    description: "n convallis vestibulum elit. Ut iaculis leo interdum, consectetur elit ut, egestas purus.",
    img_src: "https://randomuser.me/api/portraits/women/62.jpg",
    body:
    "In convallis vestibulum elit. Nullam condimentum luctus eleifend. Donec condimentum sem vel erat pharetra convallis. Ut iaculis leo interdum, consectetur elit ut, egestas purus. Donec non justo posuere, finibus risus tristique, vestibulum ex. Nam suscipit mattis elementum. Sed blandit tortor augue, ut scelerisque felis ultrices quis. Ut efficitur nisi ut sollicitudin rutrum. Vivamus bibendum pretium dui ut consequat. Pellentesque ullamcorper odio non mi commodo, vel vestibulum ipsum laoreet. Duis nunc nibh, placerat a metus ac, pharetra tincidunt nisi. Donec sapien dui, condimentum in consectetur at, convallis sit amet sapien. Donec commodo leo vitae eros venenatis hendrerit. Duis nec tortor nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id suscipit erat. Suspendisse vestibulum porta lorem finibus suscipit. In hac habitasse platea dictumst. Morbi auctor dapibus neque, eget rhoncus est porttitor quis. Ut neque mauris, tempor vel libero sed, pretium fermentum odio. Nam non efficitur nunc. Proin ac urna in lacus scelerisque scelerisque. Vivamus faucibus est sit amet nibh feugiat, ac facilisis lacus consectetur. Curabitur pellentesque mauris non fringilla pellentesque. Nam fringilla orci metus, quis feugiat turpis venenatis at. Nulla dui orci, consequat non sem vel, vestibulum gravida risus. Vivamus sagittis gravida lorem mattis pellentesque. Curabitur ac cursus libero, in rhoncus risus. Mauris vel ornare leo. Nunc blandit ultrices consectetur. Morbi id tincidunt justo. Vestibulum imperdiet dignissim sem quis fringilla. Praesent vulputate metus ac facilisis bibendum. Nam iaculis, libero et volutpat dignissim, mi nulla feugiat felis, quis interdum erat augue ac nisi. Fusce cursus tempus luctus.",
    external_link: "https://www.google.com/",

  },
  {
    name: "SmartHome Convention",
    place:"Minneapolis, MN",
    description: "n convallis vestibulum elit. Ut iaculis leo interdum, consectetur elit ut, egestas purus.",
    img_src: "https://www.aerisweather.com/img/industries/industry-smarthome-hub.jpg",
    body:
    "In convallis vestibulum elit. Nullam condimentum luctus eleifend. Donec condimentum sem vel erat pharetra convallis. Ut iaculis leo interdum, consectetur elit ut, egestas purus. Donec non justo posuere, finibus risus tristique, vestibulum ex. Nam suscipit mattis elementum. Sed blandit tortor augue, ut scelerisque felis ultrices quis. Ut efficitur nisi ut sollicitudin rutrum. Vivamus bibendum pretium dui ut consequat. Pellentesque ullamcorper odio non mi commodo, vel vestibulum ipsum laoreet. Duis nunc nibh, placerat a metus ac, pharetra tincidunt nisi. Donec sapien dui, condimentum in consectetur at, convallis sit amet sapien. Donec commodo leo vitae eros venenatis hendrerit. Duis nec tortor nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id suscipit erat. Suspendisse vestibulum porta lorem finibus suscipit. In hac habitasse platea dictumst. Morbi auctor dapibus neque, eget rhoncus est porttitor quis. Ut neque mauris, tempor vel libero sed, pretium fermentum odio. Nam non efficitur nunc. Proin ac urna in lacus scelerisque scelerisque. Vivamus faucibus est sit amet nibh feugiat, ac facilisis lacus consectetur. Curabitur pellentesque mauris non fringilla pellentesque. Nam fringilla orci metus, quis feugiat turpis venenatis at. Nulla dui orci, consequat non sem vel, vestibulum gravida risus. Vivamus sagittis gravida lorem mattis pellentesque. Curabitur ac cursus libero, in rhoncus risus. Mauris vel ornare leo. Nunc blandit ultrices consectetur. Morbi id tincidunt justo. Vestibulum imperdiet dignissim sem quis fringilla. Praesent vulputate metus ac facilisis bibendum. Nam iaculis, libero et volutpat dignissim, mi nulla feugiat felis, quis interdum erat augue ac nisi. Fusce cursus tempus luctus.",
    external_link: "https://www.google.com/",

  },
];

db.Featured
  .remove({})
  .then(() => db.Featured.collection.insertMany(featuredSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });