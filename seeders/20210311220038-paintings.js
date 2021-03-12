'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Paintings',
      [
        {
          title: "Cobblestone Farm House",
          description: "Miniature original oil painting of a cobblestone farm house nestled in a meadow. I painted it on a stretched canvas using high quality oil paints. It has been sealed with a protective coat of matte varnish. A 6\" wooden easle is included for display.",
          size: "4\" x 4\"",
          pic1: "https://i.imgur.com/f7OyrxM.jpg",
          pic2: "https://i.imgur.com/gd0YaAe.jpg",
          pic3: "https://i.imgur.com/yQr27r3.jpg",
          pic4: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Wanna play ball?",
          description: "Miniature original oil painting of terrier patiently waiting for someone to play fetch. Who can resist that adorable face! I painted it on a stretched canvas using high quality oil paints. It has been sealed with a protective coat of matte varnish. A 6\" wooden easle is included for display.",
          size: "2\" x 4\"",
          pic1: "https://i.imgur.com/f7OyrxM.jpg",
          pic2: "https://i.imgur.com/gd0YaAe.jpg",
          pic3: "https://i.imgur.com/yQr27r3.jpg",
          pic4: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hummingbird on coneflower",
          description: "Miniature original oil painting of a hummingbird resting on a coneflower. I painted it on a stretched canvas using high quality oil paints. It has been sealed with a protective coat of matte varnish. A 6\" wooden easle is included for display.",
          size: "3\" x 3\"",
          pic1: "https://i.imgur.com/f7OyrxM.jpg",
          pic2: "https://i.imgur.com/gd0YaAe.jpg",
          pic3: "https://i.imgur.com/yQr27r3.jpg",
          pic4: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lab pup with tennis ball",
          description: "Miniature original oil painting of a yellow Labrador pup resting in the grass with his tennis ball. I painted it on a stretched canvas using high quality oil paints. It has been sealed with a protective coat of matte varnish. A 6\" wooden easle is included for display.",
          size: "3\" x 3\"",
          pic1: "https://i.imgur.com/f7OyrxM.jpg",
          pic2: "https://i.imgur.com/gd0YaAe.jpg",
          pic3: "https://i.imgur.com/yQr27r3.jpg",
          pic4: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Owl",
          description: "Miniature original oil painting of a white owl with piercing yellow eyes. I painted it on a black stretched canvas using high quality oil paints. It has been sealed with a protective coat of matte varnish. A 6\" wooden easle is included for display.",
          size: "3\" x 3\"",
          pic1: "https://i.imgur.com/f7OyrxM.jpg",
          pic2: "https://i.imgur.com/gd0YaAe.jpg",
          pic3: "https://i.imgur.com/yQr27r3.jpg",
          pic4: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ]
    )
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
