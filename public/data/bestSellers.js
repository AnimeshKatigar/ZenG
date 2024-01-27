import CrystalRing from "../assets/images/CrystalRing.png";
import GreenEyeRing from "../assets/images/GreenEyeRing.png";
import OwlRing from "../assets/images/OwlRing.png";
import OrangeOwlRing from "../assets/images/OrangeOwlRing.png";
import PurpleOwlRing from "../assets/images/PurpleOwlRing.png";
import YellowOwlRing from "../assets/images/YellowOwlRing.png";

const bestSellers = [
  {
    title: "Crystal Band - Timeless Sparkle and Elegance",
    description:
      "Step into a world of timeless sparkle and elegance with our Crystal Band, a versatile and sophisticated accessory that effortlessly complements any style. This classic yet enchanting ring features a continuous band adorned with brilliant crystals, creating a captivating play of light and a touch of refined glamour.",
    price: "349",
    sizes: ["20", "21"],
    img: CrystalRing,
    html: `<div class="product__description">
    <p>Step into a world of timeless sparkle and elegance with our Crystal Band, a versatile and sophisticated accessory that effortlessly complements any style. This classic yet enchanting ring features a continuous band adorned with brilliant crystals, creating a captivating play of light and a touch of refined glamour.</p>
    <br/>
    <p><strong>Key Features:</strong></p>
<ul>
<li>Crafted from&nbsp;<span>Stainless Steel</span><span>&nbsp;</span>for durability and style</li>
<li>Versatile enough for everyday wear or special occasions</li>
<li>Available in various sizes to suit individual preferences</li>
<li>This piece deserves to be shown off but it sometimes needs some rest, too; store it safely in an air-tight box when not in use.</li>
<li>Drink at least 3 liters of water every day, but don't let it fall on the jewelry; keep away from water.</li>
<li>Chemicals look good in chemistry textbooks. On jewellery?&nbsp;<strong>Naaah!</strong>
</li>
</ul>
<ul></ul>
<br/>
<p>Elevate your style with the timeless allure of the Crystal Band. Add a touch of refined glamour to your jewelry collection with this classic accessory that stands the test of time. Order your Crystal Band now and let your elegance sparkle with every gesture.</p>
  </div>`,
  },
  {
    title: "Viper's One-Eyed Ring - A Unique and Mysterious Accessory",
    price: "350",
    img: GreenEyeRing,
    html: `<div class="product__description">
    <p >Behold the enigmatic allure of the Viper's One-Eyed Ring, a one-of-a-kind accessory that captivates with its intriguing design and mystical presence. Crafted with precision and imbued with an aura of mystery, this ring is more than just a piece of jewelry – it's a statement.</p>
<p >&nbsp;</p>
<p ><strong >Key Features:</strong></p>
<ul >
<li >Crafted from&nbsp;<span >Stainless Steel</span><span >&nbsp;</span>for durability and style</li>
<li >Versatile enough for everyday wear or special occasions</li>
<li >Available in various sizes to suit individual preferences</li>
<li>This piece deserves to be shown off but it sometimes needs some rest, too; store it safely in an air-tight box when not in use.</li>
<li>Drink at least 3 liters of water every day, but don't let it fall on the jewelry; keep away from water.</li>
<li>Chemicals look good in chemistry textbooks. On jewellery?&nbsp;<strong>Naaah!</strong>
</li>
</ul>
<ul ></ul>
<p >Indulge in the allure of the unknown and make a bold statement with the Viper's One-Eyed Ring. Act now and add this exceptional piece to your collection!</p>
  </div>`,
  },
  {
    title: "Owl Ring - Symbolic Elegance and Wise Beauty",
    price: "250",
    img: OwlRing,
    html: `<div class="product__description">
    <p >Embrace the enchanting spirit of the night with our Owl Ring, a captivating accessory that beautifully combines symbolic significance with timeless elegance. This meticulously crafted ring is more than jewelry; it's a graceful homage to the wisdom and mystery embodied by these majestic creatures.</p>
<p >&nbsp;</p>
<p ><strong >Key Features:</strong></p>
<ul >
<li >Crafted from&nbsp;<span >Stainless Steel</span><span >&nbsp;</span>for durability and style</li>
<li >Versatile enough for everyday wear or special occasions</li>
<li >Available in various sizes to suit individual preferences</li>
<li>This piece deserves to be shown off but it sometimes needs some rest, too; store it safely in an air-tight box when not in use.</li>
<li>Drink at least 3 liters of water every day, but don't let it fall on the jewelry; keep away from water.</li>
<li>Chemicals look good in chemistry textbooks. On jewellery?&nbsp;<strong>Naaah!</strong>
</li>
</ul>
<ul ></ul>
<p>Let the Owl Ring be a constant companion, a reminder of the beauty found in wisdom and the elegance of nature. Elevate your style with this meaningful and aesthetically pleasing piece. Order your Owl Ring today and add a touch of symbolic elegance to your jewelry collection.</p>
  </div>`,
    variants: [
      {
        img: PurpleOwlRing,
        variant: "Purple",
      },
      {
        img: OrangeOwlRing,
        variant: "Orange",
      },
      {
        img: YellowOwlRing,
        variant: "Yellow",
      },
    ],
  },
];

export default bestSellers;
