addLayer("Q", {
    name: "Quarks", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Q", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FF00FF",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Quarks", // Name of prestige currency
    baseResource: "Strings", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('Q', 13)) mult = mult.times(upgradeEffect('Q', 13))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "Q", description: "Q: Reset for quarks", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "String Theory",
            description: "Double your string gain.",
            cost: new Decimal(1),
        },
        12: {
            title: "Quantum Entanglement",
            description: "Boost strings based on quarks.",
            cost: new Decimal(2),
            effect() {
                return player[this.layer].points.add(1).pow(0.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            title: "Quantum Accelleration",
            description: "Increases quark gain rate.",
            cost: new Decimal(5),
            effect() {
                return player.points.add(1).pow(0.15)
            },
        },
        21: {
            title: "Tangled Up",
            description: "Doubles Quantum Entanglement.",
            cost: new Decimal(15),
            effect() {
                return player[this.layer].points.add(1).pow(0.45)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        22: {
            title: "One-Dimensional Extension",
            description: "Doubles string gain.",
            cost: new Decimal(75),
        },
        23: {
            title: "Quark Bonding",
            description: "Increases the speed of earning quarks.",
            cost: new Decimal(150),
            type: "static", 
            exponent: 0.6,
            }
    },
})


addLayer("Neu", {
    name: "Neutrons", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Neu", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#1A1948",
    requires: new Decimal(1000), // Can be a function that takes requirement increases into account
    resource: "Nuetrons", // Name of prestige currency
    baseResource: "Strings", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
    ],
    layerShown: true,
    showLayer() { layerShown: true }
})
