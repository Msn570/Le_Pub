const logotext = "Le Pub";
const meta = {
    title: "Bar Le Pub",
    description: "Bar situé au centre ville de Nancy , dans la gallerie commercial Saint-Sébastien",
};

const introdata = {
    title: "Bienvenue !",
    animated: {
        first: "Rendez-vous animé",
        second: "Saveurs Uniques",
        third: "Éclats de rire",
        fourth: "Shopping détendu",
    },
    description: "Explorez l'atmosphère détendue du Bar Le Pub au centre commercial Saint-Sébastien. De 9h30 à 19h30, découvrez des boissons de qualité dans une ambiance décontractée. Rejoignez-nous pour une pause détente.",
    your_img_url:"https://i.ibb.co/4tmG8g3/Boutiques-le-Pub-saint-sebastien-nancy-1024x683-1-min.webp"
};

const menuContent = [
    {
      id: 0,
      nom: 'Boissons Froides',
      boissons: [
        { id: 1, nom: 'Limonade', prix: 2.4 },
        { id: 2, nom: 'Sirop', prix: 2.3 },
        { id: 3, nom: 'Diabolo', prix: 2.6 },
        { id: 4, nom: 'Coca-Cola, Coca Zéro ', prix: 3.3 },
        { id: 5, nom: 'Perrier', prix: 3.3 },
        { id: 6, nom: 'Perrier Rondelle ou Sirop', prix: 3.5 },
        { id: 7, nom: 'Schweppes Tonic ou Agrumes', prix: 3.3 },
        { id: 8, nom: 'Orangina, Oasis Tropical', prix: 3.3 },
        { id: 9, nom: 'Jus de Fruits', prix: 3.3 },
        { id: 10, nom: 'Orange Préssée', prix: 3.8 },
        { id: 11, nom: 'Thé Glacé', prix: 3.3 },
        { id: 12, nom: 'Lait Sirop', prix: 2.7 },
        { id: 13, nom: 'Vittel', prix: 2.5 },
        { id: 14, nom: 'Evian 50cl', prix: 4.5 },
        { id: 15, nom: 'Badoit 50cl', prix: 5.0 },
        { id: 16, nom: 'Supplément Rondelle ou Sirop', prix: 0.2 },
      ],
    },
    {
        id: 17,
        nom: 'Boissons Chaudes',
        boissons: [
          { id: 18, nom: 'Expresso', prix: 1.8 },
          { id: 19, nom: 'Grand Expresso', prix: 3.0 },
          { id: 20, nom: 'Café Crème', prix: 2.7 },
          { id: 21, nom: 'Grand Café Crème', prix: 3.5 },
          { id: 22, nom: 'Décaféine', prix: 2.0 },
          { id: 23, nom: 'Grand Décaféine', prix: 3.5 },
          { id: 24, nom: 'Chocolat', prix: 2.7 },
          { id: 25, nom: 'Grand Chocolat', prix: 3.5 },
          { id: 26, nom: 'Chocolat Viennois', prix: 3.5 },
          { id: 27, nom: 'Grand Chocolat Viennois', prix: 4.0 },
          { id: 28, nom: 'Cappuccino Chantilly', prix: 3.5 },
          { id: 29, nom: 'Décaféine Crème', prix: 2.9 },
          { id: 30, nom: 'Noisette', prix: 2.0 },
          { id: 31, nom: 'Café Long', prix: 2.0 },
          { id: 32, nom: 'Thé ou Infusion', prix: 3.0 },
          { id: 33, nom: 'Supplément Lait ou Citron', prix: 0.2 },
        ],
      },
      {
        id: 34,
        nom: 'Bières Pressions',
        boissons: [
          { id: 35, nom: 'Pelforth Blonde', prix: 3.0 },
          { id: 36, nom: 'Pelforth Sirop', prix: 3.2 },
          { id: 37, nom: 'Panaché', prix: 3.2 },
          { id: 38, nom: 'Amer Bière', prix: 3.8 },
          { id: 39, nom: 'Affligem Blonde', prix: 4.0 },
        ],
      },
      {
        id: 40,
        nom: 'Bières Bouteilles',
        boissons: [
          { id: 41, nom: 'Pelforth Brune', prix: 4.0 },
          { id: 42, nom: 'Bière Cerise', prix: 4.0 },
          { id: 43, nom: '1664, Super Bock', prix: 4.0 },
          { id: 44, nom: 'Heineken', prix: 5.0 },
          { id: 45, nom: 'Desperados', prix: 5.0 },
        ],
      },
      {
        id: 46,
        nom: 'Apéritifs et Alcools',
        boissons: [
          { id: 47, nom: 'Martini Rouge ou Blanc', prix: 3.5 },
          { id: 48, nom: 'Porto Rouge ou Blanc', prix: 3.5 },
          { id: 49, nom: 'Pastis ou Ricard', prix: 3.0 },
          { id: 50, nom: 'Vodka, Gin', prix: 5.0 },
          { id: 51, nom: 'Cognac, Mirabelle', prix: 5.0 },
          { id: 52, nom: 'Campbell', prix: 5.0 },
          { id: 53, nom: 'Jack Daniel', prix: 7.0 },
        ],
      },
      {
        id: 54,
        nom: 'Nos Vins',
        boissons: [
          { id: 55, nom: 'Le Verre', prix: 3.0 },
          { id: 56, nom: 'Pichet 25cl', prix: 5.5 },
          { id: 57, nom: 'Pichet 50cl', prix: 10.0 },
          { id: 58, nom: 'Vin Moelleux', prix: 4.0 },
          { id: 59, nom: 'Kir', prix: 3.5 },
          { id: 60, nom: 'Kir Royal', prix: 7.5 },
        ],
      },
  ];

  const menuContent2 = [
    {
      id: 61,
      nom: 'Sandwichs',
      plats: [
        { id: 62, nom: 'Capital', description: 'Jambon, beurre, cornichon', prix: 3.50  },
        { id: 63, nom: 'Rustique', description: 'Saucisson, beurre, fromage', prix: 3.50  },
        { id: 64, nom: 'Suisse', description: 'Jambon, beurre, fromage', prix: 4.0 },
        { id: 65, nom: 'Paysan', description: 'Poulet, salade, tomate, mayonaisse', prix: 4.20 },
        { id: 66, nom: 'Crudité', description: 'Jambon, oeuf dur, salade, tomate, mayonaisse', prix: 4.20 },
        { id: 67, nom: 'Marin', description: 'Thon, oeuf dur, salade, tomate, mayonaisse', prix: 4.50 },
      ],
    },
    {
      id: 68,
      nom: 'Croques Monsieur',
      plats: [
        { id: 69, nom: 'Croque Monsieur et salade',  prix: 6.50 },
        { id: 70, nom: 'Croque Monsieur au poulet et salade',  prix: 7.50 },
        { id: 71, nom: 'Croque Monsieur et salade vosgienne', prix: 8.0 },
      ],
    },
    {
      id: 72,
      nom: 'Bruschettas',
      plats: [
        { id: 73, nom: 'Romaine', description: 'Jambon, mozarella, sauce tomates', prix: 8.0 },
        { id: 74, nom: 'Campagnarde', description: 'Lardons, pommes de terre, crème fraîche, mozarella', prix: 8.0 },
        { id: 75, nom: 'Fermière', description: 'Poulet, chèvre, crème fraîche, mozarella, pesto', prix: 8.0 },
        { id: 76, nom: 'Atlantique', description: 'Saumon, crème fraîche, crème oignons, câpres', prix: 8.0 },
      ],
    },
    {
      id: 77,
      nom: 'Salades',
      plats: [
        { id: 78, nom: 'Vosgienne', description: 'Salade, pommes de terre, oeuf dur, lardons, croûtons, crème fraîche', prix: 8.50 },
        { id: 79, nom: 'César', description: 'Salade, poulet chaud, croûtons, sauce césar', prix: 8.50 },
        { id: 80, nom: 'Chèvre Chaud', description: 'Salade, toast de chèvre, jambon cru, croûtons, miel', prix: 8.50 },
        { id: 81, nom: 'Gésier', description: 'Salade, gésiers de volaille chaud, pommes de terre, tomates', prix: 8.50 },
        { id: 82, nom: 'Belle des mers', description: 'Salade, saumon fumé, tomates, crème fraîche', prix: 8.50 },
        { id: 83, nom: 'Italienne', description: 'Salade, taomates, mozarella, jambon cru, sauce pesto', prix: 8.50 },
        { id: 84, nom: 'Pièmontaise', description: 'Salade, jambon, pomes de terre, oeuf dur, cornichons, tomates', prix: 8.50 },
      ],
    },
    {
      id: 85,
      nom: 'Charcuteries Et Fromages',
      plats: [
        { id: 86, nom: 'Assiette de fromage',  prix: 4.0 },
        { id: 87, nom: 'Ardoise de charcuteries et fromages',  prix: 8.0 },
      ],
    },
    {
      id: 88,
      nom: 'Pâtes',
      plats: [
        { id: 89, nom: 'Carbonara', prix: 8.0 },
        { id: 90, nom: 'Bolognaise', prix: 8.0 },
        { id: 91, nom: 'Lasagne de Boeuf', prix: 9.0 },
      ],
    },
    {
      id: 92,
      nom: 'Omelettes',
      plats: [
        { id: 93, nom: 'Nature',description: 'Accompagnées de pommes de terre vapeur et salade', prix: 7.0 },
        { id: 94, nom: 'Fromage',description: 'Accompagnées de pommes de terre vapeur et salade', prix: 7.50 },
        { id: 95, nom: 'Fromage et champignons',description: 'Accompagnées de pommes de terre vapeur et salade', prix: 8.0 },
        { id: 96, nom: 'Fromage, champignons et lardons',description: 'Accompagnées de pommes de terre vapeur et salade', prix: 8.50 },
      ],
    },
    {
      id: 97,
      nom: 'Plat Du jour',
      plats: [
        { id: 98, nom: 'Voir Suggestion',description: 'Nos plats sont accompagnés de pâtes , pommes de terre vapeur, riz ou salade verte', prix: 7.0 },
      ],
    },
    {
      id: 99,
      nom: 'Formules',
      plats: [
        { id: 100, nom: 'Plat Du Jour',description: '1 Plat du jour + 1 boisson ( Coca-Cola, Diabolo, Eau Plate ou Gazeuse, Thé Glacé, Pelforth Pression ou Verre de Vin) + 1 Dessert ( Tiramisu, île flottante, crème brûlée ou 2 boules de glace', prix: 16.0 },
        { id: 101, nom: 'Salade',description: '1 Salade au choix + 1 boisson ( Coca-Cola, Diabolo, Eau Plate ou Gazeuse, Thé Glacé, Pelforth Pression ou Verre de Vin) + 1 Dessert ( Tiramisu, île flottante, crème brûlée ou 2 boules de glace', prix: 15.0 },
      ],
    },
    {
      id: 102,
      nom: 'Glaces',
      plats: [
        { id: 103, nom: 'Chocolat liégois',description: 'Chocolat, vanille, coulis chocolat, chantilly', prix: 6.50 },
        { id: 104, nom: 'Café liégois',description: 'Café, vanille, coulis café, chantilly', prix: 6.50 },
        { id: 105, nom: 'Dame blanche',description: 'Vanille, coulis chocolat, chantilly', prix: 6.50 },
        { id: 106, nom: 'La craquante',description: 'Pistache, vanille, café, chantilly', prix: 6.50 },
        { id: 107, nom: 'Coupe de printemps',description: 'framboise, fraise, citron, chantilly', prix: 6.50 },
        { id: 108, nom: 'Le Clown',description: '2 boule vanille, chantilly, smarties', prix: 5.0 },
        { id: 109, nom: '1 boule',description: 'Vanille, chocolat, pistache, café, citron, framboise', prix: 2.50 },
        { id: 110, nom: '2 boules',description: 'Vanille, chocolat, pistache, café, citron, framboise', prix: 4.0 },
        { id: 111, nom: '3 boules',description: 'Vanille, chocolat, pistache, café, citron, framboise', prix: 6.0 },
      ],
    }
  ];


const socialprofils = {
    facebook: "https://www.facebook.com/LePubNancy/",
    google: "https://www.google.com/search?sca_esv=8b220a0dbcb8d5e1&rlz=1C1ONGR_frFR1049FR1049&hl=fr-FR&tbm=lcl&q=Le+Pub+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2tDA1NzU1MjEwtrQ0MLIwNjO33MDI-IqR2ydVIaA0ScGxLLN4ESsyDwBgBNOmNgAAAA&rldimm=1857552403990283679&sa=X&ved=2ahUKEwjZuPHS-7iEAxWlTaQEHRayDQYQ9fQKegQIYhAF&biw=1536&bih=695&dpr=1.25#lkt=LocalPoiReviews"
};

export {
    meta,
    introdata,
    socialprofils,
    logotext,
    menuContent,
    menuContent2,
};