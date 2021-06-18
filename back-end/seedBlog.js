const mongoose = require("mongoose");
const db = require("./models");
const dotenv = require("dotenv");
dotenv.config();


mongoose.connect(
    "mongodb://localhost/lifeathome"
    );

const blogSeed = [
  {
    title: "Test 1",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo efficitur ipsum, sit amet vehicula enim. Aenean consequat nunc sit amet quam iaculis blandit.",
    img_src: "https://images.unsplash.com/photo-1621569899323-55c203a0f7f1?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    body:
    "In convallis vestibulum elit. Nullam condimentum luctus eleifend. Donec condimentum sem vel erat pharetra convallis. Ut iaculis leo interdum, consectetur elit ut, egestas purus. Donec non justo posuere, finibus risus tristique, vestibulum ex. Nam suscipit mattis elementum. Sed blandit tortor augue, ut scelerisque felis ultrices quis. Ut efficitur nisi ut sollicitudin rutrum. Vivamus bibendum pretium dui ut consequat. Pellentesque ullamcorper odio non mi commodo, vel vestibulum ipsum laoreet. Duis nunc nibh, placerat a metus ac, pharetra tincidunt nisi. Donec sapien dui, condimentum in consectetur at, convallis sit amet sapien. Donec commodo leo vitae eros venenatis hendrerit. Duis nec tortor nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id suscipit erat. Suspendisse vestibulum porta lorem finibus suscipit. In hac habitasse platea dictumst. Morbi auctor dapibus neque, eget rhoncus est porttitor quis. Ut neque mauris, tempor vel libero sed, pretium fermentum odio. Nam non efficitur nunc. Proin ac urna in lacus scelerisque scelerisque. Vivamus faucibus est sit amet nibh feugiat, ac facilisis lacus consectetur. Curabitur pellentesque mauris non fringilla pellentesque. Nam fringilla orci metus, quis feugiat turpis venenatis at. Nulla dui orci, consequat non sem vel, vestibulum gravida risus. Vivamus sagittis gravida lorem mattis pellentesque. Curabitur ac cursus libero, in rhoncus risus. Mauris vel ornare leo. Nunc blandit ultrices consectetur. Morbi id tincidunt justo. Vestibulum imperdiet dignissim sem quis fringilla. Praesent vulputate metus ac facilisis bibendum. Nam iaculis, libero et volutpat dignissim, mi nulla feugiat felis, quis interdum erat augue ac nisi. Fusce cursus tempus luctus.",
    date_posted: new Date(Date.now()),

  },
  {
    title: "Test 2",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo efficitur ipsum, sit amet vehicula enim. Aenean consequat nunc sit amet quam iaculis blandit.",
    img_src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    body:
    "In convallis vestibulum elit. Nullam condimentum luctus eleifend. Donec condimentum sem vel erat pharetra convallis. Ut iaculis leo interdum, consectetur elit ut, egestas purus. Donec non justo posuere, finibus risus tristique, vestibulum ex. Nam suscipit mattis elementum. Sed blandit tortor augue, ut scelerisque felis ultrices quis. Ut efficitur nisi ut sollicitudin rutrum. Vivamus bibendum pretium dui ut consequat. Pellentesque ullamcorper odio non mi commodo, vel vestibulum ipsum laoreet. Duis nunc nibh, placerat a metus ac, pharetra tincidunt nisi. Donec sapien dui, condimentum in consectetur at, convallis sit amet sapien. Donec commodo leo vitae eros venenatis hendrerit. Duis nec tortor nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id suscipit erat. Suspendisse vestibulum porta lorem finibus suscipit. In hac habitasse platea dictumst. Morbi auctor dapibus neque, eget rhoncus est porttitor quis. Ut neque mauris, tempor vel libero sed, pretium fermentum odio. Nam non efficitur nunc. Proin ac urna in lacus scelerisque scelerisque. Vivamus faucibus est sit amet nibh feugiat, ac facilisis lacus consectetur. Curabitur pellentesque mauris non fringilla pellentesque. Nam fringilla orci metus, quis feugiat turpis venenatis at. Nulla dui orci, consequat non sem vel, vestibulum gravida risus. Vivamus sagittis gravida lorem mattis pellentesque. Curabitur ac cursus libero, in rhoncus risus. Mauris vel ornare leo. Nunc blandit ultrices consectetur. Morbi id tincidunt justo. Vestibulum imperdiet dignissim sem quis fringilla. Praesent vulputate metus ac facilisis bibendum. Nam iaculis, libero et volutpat dignissim, mi nulla feugiat felis, quis interdum erat augue ac nisi. Fusce cursus tempus luctus.",
    date_posted: new Date(Date.now()),

  },
  {
    title: "Test 3",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo efficitur ipsum, sit amet vehicula enim. Aenean consequat nunc sit amet quam iaculis blandit.",
    img_src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80",
    body:
    "In convallis vestibulum elit. Nullam condimentum luctus eleifend. Donec condimentum sem vel erat pharetra convallis. Ut iaculis leo interdum, consectetur elit ut, egestas purus. Donec non justo posuere, finibus risus tristique, vestibulum ex. Nam suscipit mattis elementum. Sed blandit tortor augue, ut scelerisque felis ultrices quis. Ut efficitur nisi ut sollicitudin rutrum. Vivamus bibendum pretium dui ut consequat. Pellentesque ullamcorper odio non mi commodo, vel vestibulum ipsum laoreet. Duis nunc nibh, placerat a metus ac, pharetra tincidunt nisi. Donec sapien dui, condimentum in consectetur at, convallis sit amet sapien. Donec commodo leo vitae eros venenatis hendrerit. Duis nec tortor nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id suscipit erat. Suspendisse vestibulum porta lorem finibus suscipit. In hac habitasse platea dictumst. Morbi auctor dapibus neque, eget rhoncus est porttitor quis. Ut neque mauris, tempor vel libero sed, pretium fermentum odio. Nam non efficitur nunc. Proin ac urna in lacus scelerisque scelerisque. Vivamus faucibus est sit amet nibh feugiat, ac facilisis lacus consectetur. Curabitur pellentesque mauris non fringilla pellentesque. Nam fringilla orci metus, quis feugiat turpis venenatis at. Nulla dui orci, consequat non sem vel, vestibulum gravida risus. Vivamus sagittis gravida lorem mattis pellentesque. Curabitur ac cursus libero, in rhoncus risus. Mauris vel ornare leo. Nunc blandit ultrices consectetur. Morbi id tincidunt justo. Vestibulum imperdiet dignissim sem quis fringilla. Praesent vulputate metus ac facilisis bibendum. Nam iaculis, libero et volutpat dignissim, mi nulla feugiat felis, quis interdum erat augue ac nisi. Fusce cursus tempus luctus.",
    date_posted: new Date(Date.now()),

  },
  {
    title: "Test 4",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo efficitur ipsum, sit amet vehicula enim. Aenean consequat nunc sit amet quam iaculis blandit.",
    img_src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    body:
    "In convallis vestibulum elit. Nullam condimentum luctus eleifend. Donec condimentum sem vel erat pharetra convallis. Ut iaculis leo interdum, consectetur elit ut, egestas purus. Donec non justo posuere, finibus risus tristique, vestibulum ex. Nam suscipit mattis elementum. Sed blandit tortor augue, ut scelerisque felis ultrices quis. Ut efficitur nisi ut sollicitudin rutrum. Vivamus bibendum pretium dui ut consequat. Pellentesque ullamcorper odio non mi commodo, vel vestibulum ipsum laoreet. Duis nunc nibh, placerat a metus ac, pharetra tincidunt nisi. Donec sapien dui, condimentum in consectetur at, convallis sit amet sapien. Donec commodo leo vitae eros venenatis hendrerit. Duis nec tortor nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id suscipit erat. Suspendisse vestibulum porta lorem finibus suscipit. In hac habitasse platea dictumst. Morbi auctor dapibus neque, eget rhoncus est porttitor quis. Ut neque mauris, tempor vel libero sed, pretium fermentum odio. Nam non efficitur nunc. Proin ac urna in lacus scelerisque scelerisque. Vivamus faucibus est sit amet nibh feugiat, ac facilisis lacus consectetur. Curabitur pellentesque mauris non fringilla pellentesque. Nam fringilla orci metus, quis feugiat turpis venenatis at. Nulla dui orci, consequat non sem vel, vestibulum gravida risus. Vivamus sagittis gravida lorem mattis pellentesque. Curabitur ac cursus libero, in rhoncus risus. Mauris vel ornare leo. Nunc blandit ultrices consectetur. Morbi id tincidunt justo. Vestibulum imperdiet dignissim sem quis fringilla. Praesent vulputate metus ac facilisis bibendum. Nam iaculis, libero et volutpat dignissim, mi nulla feugiat felis, quis interdum erat augue ac nisi. Fusce cursus tempus luctus.",
    date_posted: new Date(Date.now()),

  },
  {
    title: "Test 5",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo efficitur ipsum, sit amet vehicula enim. Aenean consequat nunc sit amet quam iaculis blandit.",
    img_src: "https://images.unsplash.com/photo-1462143338528-eca9936a4d09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    body:
    "In convallis vestibulum elit. Nullam condimentum luctus eleifend. Donec condimentum sem vel erat pharetra convallis. Ut iaculis leo interdum, consectetur elit ut, egestas purus. Donec non justo posuere, finibus risus tristique, vestibulum ex. Nam suscipit mattis elementum. Sed blandit tortor augue, ut scelerisque felis ultrices quis. Ut efficitur nisi ut sollicitudin rutrum. Vivamus bibendum pretium dui ut consequat. Pellentesque ullamcorper odio non mi commodo, vel vestibulum ipsum laoreet. Duis nunc nibh, placerat a metus ac, pharetra tincidunt nisi. Donec sapien dui, condimentum in consectetur at, convallis sit amet sapien. Donec commodo leo vitae eros venenatis hendrerit. Duis nec tortor nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id suscipit erat. Suspendisse vestibulum porta lorem finibus suscipit. In hac habitasse platea dictumst. Morbi auctor dapibus neque, eget rhoncus est porttitor quis. Ut neque mauris, tempor vel libero sed, pretium fermentum odio. Nam non efficitur nunc. Proin ac urna in lacus scelerisque scelerisque. Vivamus faucibus est sit amet nibh feugiat, ac facilisis lacus consectetur. Curabitur pellentesque mauris non fringilla pellentesque. Nam fringilla orci metus, quis feugiat turpis venenatis at. Nulla dui orci, consequat non sem vel, vestibulum gravida risus. Vivamus sagittis gravida lorem mattis pellentesque. Curabitur ac cursus libero, in rhoncus risus. Mauris vel ornare leo. Nunc blandit ultrices consectetur. Morbi id tincidunt justo. Vestibulum imperdiet dignissim sem quis fringilla. Praesent vulputate metus ac facilisis bibendum. Nam iaculis, libero et volutpat dignissim, mi nulla feugiat felis, quis interdum erat augue ac nisi. Fusce cursus tempus luctus.",
    date_posted: new Date(Date.now()),

  },
  {
    title: "Test 6",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo efficitur ipsum, sit amet vehicula enim. Aenean consequat nunc sit amet quam iaculis blandit.",
    img_src: "https://images.unsplash.com/photo-1621569899323-55c203a0f7f1?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    body:
    "In convallis vestibulum elit. Nullam condimentum luctus eleifend. Donec condimentum sem vel erat pharetra convallis. Ut iaculis leo interdum, consectetur elit ut, egestas purus. Donec non justo posuere, finibus risus tristique, vestibulum ex. Nam suscipit mattis elementum. Sed blandit tortor augue, ut scelerisque felis ultrices quis. Ut efficitur nisi ut sollicitudin rutrum. Vivamus bibendum pretium dui ut consequat. Pellentesque ullamcorper odio non mi commodo, vel vestibulum ipsum laoreet. Duis nunc nibh, placerat a metus ac, pharetra tincidunt nisi. Donec sapien dui, condimentum in consectetur at, convallis sit amet sapien. Donec commodo leo vitae eros venenatis hendrerit. Duis nec tortor nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id suscipit erat. Suspendisse vestibulum porta lorem finibus suscipit. In hac habitasse platea dictumst. Morbi auctor dapibus neque, eget rhoncus est porttitor quis. Ut neque mauris, tempor vel libero sed, pretium fermentum odio. Nam non efficitur nunc. Proin ac urna in lacus scelerisque scelerisque. Vivamus faucibus est sit amet nibh feugiat, ac facilisis lacus consectetur. Curabitur pellentesque mauris non fringilla pellentesque. Nam fringilla orci metus, quis feugiat turpis venenatis at. Nulla dui orci, consequat non sem vel, vestibulum gravida risus. Vivamus sagittis gravida lorem mattis pellentesque. Curabitur ac cursus libero, in rhoncus risus. Mauris vel ornare leo. Nunc blandit ultrices consectetur. Morbi id tincidunt justo. Vestibulum imperdiet dignissim sem quis fringilla. Praesent vulputate metus ac facilisis bibendum. Nam iaculis, libero et volutpat dignissim, mi nulla feugiat felis, quis interdum erat augue ac nisi. Fusce cursus tempus luctus.",
    date_posted: new Date(Date.now()),

  },
  {
    title: "Test 7",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo efficitur ipsum, sit amet vehicula enim. Aenean consequat nunc sit amet quam iaculis blandit.",
    img_src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    body:
    "In convallis vestibulum elit. Nullam condimentum luctus eleifend. Donec condimentum sem vel erat pharetra convallis. Ut iaculis leo interdum, consectetur elit ut, egestas purus. Donec non justo posuere, finibus risus tristique, vestibulum ex. Nam suscipit mattis elementum. Sed blandit tortor augue, ut scelerisque felis ultrices quis. Ut efficitur nisi ut sollicitudin rutrum. Vivamus bibendum pretium dui ut consequat. Pellentesque ullamcorper odio non mi commodo, vel vestibulum ipsum laoreet. Duis nunc nibh, placerat a metus ac, pharetra tincidunt nisi. Donec sapien dui, condimentum in consectetur at, convallis sit amet sapien. Donec commodo leo vitae eros venenatis hendrerit. Duis nec tortor nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id suscipit erat. Suspendisse vestibulum porta lorem finibus suscipit. In hac habitasse platea dictumst. Morbi auctor dapibus neque, eget rhoncus est porttitor quis. Ut neque mauris, tempor vel libero sed, pretium fermentum odio. Nam non efficitur nunc. Proin ac urna in lacus scelerisque scelerisque. Vivamus faucibus est sit amet nibh feugiat, ac facilisis lacus consectetur. Curabitur pellentesque mauris non fringilla pellentesque. Nam fringilla orci metus, quis feugiat turpis venenatis at. Nulla dui orci, consequat non sem vel, vestibulum gravida risus. Vivamus sagittis gravida lorem mattis pellentesque. Curabitur ac cursus libero, in rhoncus risus. Mauris vel ornare leo. Nunc blandit ultrices consectetur. Morbi id tincidunt justo. Vestibulum imperdiet dignissim sem quis fringilla. Praesent vulputate metus ac facilisis bibendum. Nam iaculis, libero et volutpat dignissim, mi nulla feugiat felis, quis interdum erat augue ac nisi. Fusce cursus tempus luctus.",
    date_posted: new Date(Date.now()),

  },
  {
    title: "Test 8",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo efficitur ipsum, sit amet vehicula enim. Aenean consequat nunc sit amet quam iaculis blandit.",
    img_src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80",
    body:
    "In convallis vestibulum elit. Nullam condimentum luctus eleifend. Donec condimentum sem vel erat pharetra convallis. Ut iaculis leo interdum, consectetur elit ut, egestas purus. Donec non justo posuere, finibus risus tristique, vestibulum ex. Nam suscipit mattis elementum. Sed blandit tortor augue, ut scelerisque felis ultrices quis. Ut efficitur nisi ut sollicitudin rutrum. Vivamus bibendum pretium dui ut consequat. Pellentesque ullamcorper odio non mi commodo, vel vestibulum ipsum laoreet. Duis nunc nibh, placerat a metus ac, pharetra tincidunt nisi. Donec sapien dui, condimentum in consectetur at, convallis sit amet sapien. Donec commodo leo vitae eros venenatis hendrerit. Duis nec tortor nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id suscipit erat. Suspendisse vestibulum porta lorem finibus suscipit. In hac habitasse platea dictumst. Morbi auctor dapibus neque, eget rhoncus est porttitor quis. Ut neque mauris, tempor vel libero sed, pretium fermentum odio. Nam non efficitur nunc. Proin ac urna in lacus scelerisque scelerisque. Vivamus faucibus est sit amet nibh feugiat, ac facilisis lacus consectetur. Curabitur pellentesque mauris non fringilla pellentesque. Nam fringilla orci metus, quis feugiat turpis venenatis at. Nulla dui orci, consequat non sem vel, vestibulum gravida risus. Vivamus sagittis gravida lorem mattis pellentesque. Curabitur ac cursus libero, in rhoncus risus. Mauris vel ornare leo. Nunc blandit ultrices consectetur. Morbi id tincidunt justo. Vestibulum imperdiet dignissim sem quis fringilla. Praesent vulputate metus ac facilisis bibendum. Nam iaculis, libero et volutpat dignissim, mi nulla feugiat felis, quis interdum erat augue ac nisi. Fusce cursus tempus luctus.",
    date_posted: new Date(Date.now()),

  },
  {
    title: "Test 9",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo efficitur ipsum, sit amet vehicula enim. Aenean consequat nunc sit amet quam iaculis blandit.",
    img_src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    body:
    "In convallis vestibulum elit. Nullam condimentum luctus eleifend. Donec condimentum sem vel erat pharetra convallis. Ut iaculis leo interdum, consectetur elit ut, egestas purus. Donec non justo posuere, finibus risus tristique, vestibulum ex. Nam suscipit mattis elementum. Sed blandit tortor augue, ut scelerisque felis ultrices quis. Ut efficitur nisi ut sollicitudin rutrum. Vivamus bibendum pretium dui ut consequat. Pellentesque ullamcorper odio non mi commodo, vel vestibulum ipsum laoreet. Duis nunc nibh, placerat a metus ac, pharetra tincidunt nisi. Donec sapien dui, condimentum in consectetur at, convallis sit amet sapien. Donec commodo leo vitae eros venenatis hendrerit. Duis nec tortor nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id suscipit erat. Suspendisse vestibulum porta lorem finibus suscipit. In hac habitasse platea dictumst. Morbi auctor dapibus neque, eget rhoncus est porttitor quis. Ut neque mauris, tempor vel libero sed, pretium fermentum odio. Nam non efficitur nunc. Proin ac urna in lacus scelerisque scelerisque. Vivamus faucibus est sit amet nibh feugiat, ac facilisis lacus consectetur. Curabitur pellentesque mauris non fringilla pellentesque. Nam fringilla orci metus, quis feugiat turpis venenatis at. Nulla dui orci, consequat non sem vel, vestibulum gravida risus. Vivamus sagittis gravida lorem mattis pellentesque. Curabitur ac cursus libero, in rhoncus risus. Mauris vel ornare leo. Nunc blandit ultrices consectetur. Morbi id tincidunt justo. Vestibulum imperdiet dignissim sem quis fringilla. Praesent vulputate metus ac facilisis bibendum. Nam iaculis, libero et volutpat dignissim, mi nulla feugiat felis, quis interdum erat augue ac nisi. Fusce cursus tempus luctus.",
    date_posted: new Date(Date.now()),

  },
  {
    title: "Test 10",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo efficitur ipsum, sit amet vehicula enim. Aenean consequat nunc sit amet quam iaculis blandit.",
    img_src: "https://images.unsplash.com/photo-1462143338528-eca9936a4d09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    body:
    "In convallis vestibulum elit. Nullam condimentum luctus eleifend. Donec condimentum sem vel erat pharetra convallis. Ut iaculis leo interdum, consectetur elit ut, egestas purus. Donec non justo posuere, finibus risus tristique, vestibulum ex. Nam suscipit mattis elementum. Sed blandit tortor augue, ut scelerisque felis ultrices quis. Ut efficitur nisi ut sollicitudin rutrum. Vivamus bibendum pretium dui ut consequat. Pellentesque ullamcorper odio non mi commodo, vel vestibulum ipsum laoreet. Duis nunc nibh, placerat a metus ac, pharetra tincidunt nisi. Donec sapien dui, condimentum in consectetur at, convallis sit amet sapien. Donec commodo leo vitae eros venenatis hendrerit. Duis nec tortor nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id suscipit erat. Suspendisse vestibulum porta lorem finibus suscipit. In hac habitasse platea dictumst. Morbi auctor dapibus neque, eget rhoncus est porttitor quis. Ut neque mauris, tempor vel libero sed, pretium fermentum odio. Nam non efficitur nunc. Proin ac urna in lacus scelerisque scelerisque. Vivamus faucibus est sit amet nibh feugiat, ac facilisis lacus consectetur. Curabitur pellentesque mauris non fringilla pellentesque. Nam fringilla orci metus, quis feugiat turpis venenatis at. Nulla dui orci, consequat non sem vel, vestibulum gravida risus. Vivamus sagittis gravida lorem mattis pellentesque. Curabitur ac cursus libero, in rhoncus risus. Mauris vel ornare leo. Nunc blandit ultrices consectetur. Morbi id tincidunt justo. Vestibulum imperdiet dignissim sem quis fringilla. Praesent vulputate metus ac facilisis bibendum. Nam iaculis, libero et volutpat dignissim, mi nulla feugiat felis, quis interdum erat augue ac nisi. Fusce cursus tempus luctus.",
    date_posted: new Date(Date.now()),

  },
  {
    title: "Test 11",
    discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo efficitur ipsum, sit amet vehicula enim. Aenean consequat nunc sit amet quam iaculis blandit.",
    img_src: "https://images.unsplash.com/photo-1462143338528-eca9936a4d09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    body:
    "In convallis vestibulum elit. Nullam condimentum luctus eleifend. Donec condimentum sem vel erat pharetra convallis. Ut iaculis leo interdum, consectetur elit ut, egestas purus. Donec non justo posuere, finibus risus tristique, vestibulum ex. Nam suscipit mattis elementum. Sed blandit tortor augue, ut scelerisque felis ultrices quis. Ut efficitur nisi ut sollicitudin rutrum. Vivamus bibendum pretium dui ut consequat. Pellentesque ullamcorper odio non mi commodo, vel vestibulum ipsum laoreet. Duis nunc nibh, placerat a metus ac, pharetra tincidunt nisi. Donec sapien dui, condimentum in consectetur at, convallis sit amet sapien. Donec commodo leo vitae eros venenatis hendrerit. Duis nec tortor nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id suscipit erat. Suspendisse vestibulum porta lorem finibus suscipit. In hac habitasse platea dictumst. Morbi auctor dapibus neque, eget rhoncus est porttitor quis. Ut neque mauris, tempor vel libero sed, pretium fermentum odio. Nam non efficitur nunc. Proin ac urna in lacus scelerisque scelerisque. Vivamus faucibus est sit amet nibh feugiat, ac facilisis lacus consectetur. Curabitur pellentesque mauris non fringilla pellentesque. Nam fringilla orci metus, quis feugiat turpis venenatis at. Nulla dui orci, consequat non sem vel, vestibulum gravida risus. Vivamus sagittis gravida lorem mattis pellentesque. Curabitur ac cursus libero, in rhoncus risus. Mauris vel ornare leo. Nunc blandit ultrices consectetur. Morbi id tincidunt justo. Vestibulum imperdiet dignissim sem quis fringilla. Praesent vulputate metus ac facilisis bibendum. Nam iaculis, libero et volutpat dignissim, mi nulla feugiat felis, quis interdum erat augue ac nisi. Fusce cursus tempus luctus.",
    date_posted: new Date(Date.now()),

  },

];

db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(blogSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
