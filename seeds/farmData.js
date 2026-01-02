const Farm = require("../models/Farm.js");

const farmData = [
  {
    farm_name: "Bob's Mules",
    description:
      "Bob's Mules is a family owned farm for two generations, specializing in sustainable livestock and organic feed production.",
    user_id: 1,
  },
  {
    farm_name: "J's Veggies",
    description:
      "J's Veggies is an all organic non-pesticide using farm in the hills, growing seasonal vegetables year-round.",
    user_id: 2,
  },
  {
    farm_name: "Bubba's Organics",
    description:
      "Bubba's Organics is a family owned farm for two generations, committed to regenerative agriculture practices.",
    user_id: 3,
  },
  {
    farm_name: "Shoots and Ladders Farms",
    description:
      "Shoots and Ladders Farms is an all organic non-pesticide using farm in the hills, focusing on heirloom varieties.",
    user_id: 4,
  },
  {
    farm_name: "Jolly Farms",
    description:
      "Jolly Farms is a family owned farm for two generations, producing grass-fed beef and free-range poultry.",
    user_id: 5,
  },
  {
    farm_name: "Tasty Dirt",
    description:
      "Tasty Dirt is an all organic non-pesticide using farm in the hills, specializing in root vegetables and herbs.",
    user_id: 6,
  },
  {
    farm_name: "Green Valley Cooperative",
    description:
      "A community-supported agriculture cooperative growing diverse crops using permaculture principles and sustainable water management.",
    user_id: 1,
  },
  {
    farm_name: "Mountain View Dairy",
    description:
      "Small-scale dairy farm producing artisanal cheeses and fresh milk from grass-fed cows in the mountain valleys.",
    user_id: 2,
  },
  {
    farm_name: "Sunrise Orchard",
    description:
      "Organic fruit orchard specializing in apples, peaches, and berries. Using integrated pest management and companion planting.",
    user_id: 3,
  },
  {
    farm_name: "Heritage Grain Farm",
    description:
      "Growing ancient grains and heirloom wheat varieties using traditional methods. Supporting local bakeries and food security.",
    user_id: 4,
  },
  {
    farm_name: "Riverbend Aquaponics",
    description:
      "Innovative aquaponics operation combining fish farming with hydroponic vegetable production for year-round harvests.",
    user_id: 5,
  },
  {
    farm_name: "Wildflower Apiary",
    description:
      "Sustainable beekeeping operation producing raw honey and supporting local pollinator populations through native wildflower cultivation.",
    user_id: 6,
  },
  {
    farm_name: "Prairie Grass Ranch",
    description:
      "Regenerative cattle ranch using rotational grazing to restore prairie ecosystems while producing high-quality grass-fed beef.",
    user_id: 1,
  },
  {
    farm_name: "Coastal Shellfish Farm",
    description:
      "Sustainable shellfish aquaculture operation growing oysters and clams while improving water quality in coastal estuaries.",
    user_id: 2,
  },
  {
    farm_name: "Urban Microgreens",
    description:
      "Year-round microgreens production in urban greenhouses, providing fresh greens to local restaurants and farmers markets.",
    user_id: 3,
  },
  {
    farm_name: "Maple Ridge Farm",
    description:
      "Multi-generational family farm producing maple syrup, seasonal vegetables, and raising heritage breed pigs.",
    user_id: 4,
  },
  {
    farm_name: "Desert Bloom Farm",
    description:
      "Innovative desert agriculture using drought-resistant crops and water-efficient irrigation to grow produce in arid conditions.",
    user_id: 5,
  },
  {
    farm_name: "Forest Mushroom Farm",
    description:
      "Specialty mushroom cultivation using sustainable forestry practices and organic substrates to grow gourmet varieties.",
    user_id: 6,
  },
  {
    farm_name: "Pasture Perfect Poultry",
    description:
      "Free-range chicken and turkey operation with mobile coops, allowing birds to forage naturally while fertilizing pastures.",
    user_id: 1,
  },
  {
    farm_name: "Vineyard Estate",
    description:
      "Boutique vineyard producing organic wines and table grapes, using cover crops and natural pest control methods.",
    user_id: 2,
  },
];

const seedFarms = () => Farm.bulkCreate(farmData);

module.exports = seedFarms;
