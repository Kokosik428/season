ServerEvents.recipes(event => {
    event.shaped(
        Item.of('simurail:physics_bogey', 1),
        [
            ' S ', 
            'GFG', 
            ' T '  
        ],
        {
            S: 'simulated:physics_assembler', 
            G: 'create:shaft',
            F: 'create:railway_casing',
            T: 'create:precision_mechanism'             
        }
    )
})
ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('simurail:inverted_physics_bogey', 1), 
        [
            'simurail:physics_bogey'
        ]
    )
})
ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('simurail:physics_bogey', 1), 
        [
            'simurail:inverted_physics_bogey'
        ]
    )
})
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('simurail:automatic_coupler', 1), 
        [
            'R  ', 
            'DFG', 
            'R  '  
        ],
        {
            D: 'create:andesite_casing', 
            G: 'create:metal_bracket',
            F: 'simurail:steering_connector',
            R: 'minecraft:redstone'
             
        }
    )
})
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('simurail:steering_connector', 1), 
        [
            'RRR', 
            'RFR', 
            'RRR'  
        ],
        {
            F: 'create:minecart_coupling', 
            R: 'createbigcannons:steel_ingot',

        }
    )
})