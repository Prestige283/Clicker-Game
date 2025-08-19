addLayer("D", {
    name: "", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "   ", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ff8800",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "clicks", // Name of prestige currency
    baseResource: "clicks", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: 0, // Row the layer is in on the tree (0 is the first row)
    clickables: {
    11: {
        display() {return "+1 click"},
        canClick() {return true},
        onClick() {player.points=player.points.add(1)},
        title() {return "Click me"},
        },
    },
    tabFormat: [
    "clickables"
],
    tooltip() {return "The Button"},
    layerShown(){return true}
})
