ServerEvents.tags('item', event => {
    event.add('forge:crops/carrot', 'minecraft:carrot')
})
ServerEvents.tags('item', event => {
    event.add('forge:bread', 'minecraft:bread')
})
ServerEvents.tags('item', event => {
    // Добавляем ванильную морковь в сломанный тег рецепта
    event.add('c:fruit/melon', 'minecraft:melon')
})
ServerEvents.tags('item', event => {
    // Добавляем ванильную морковь в сломанный тег рецепта
    event.add('c:plates/steel', 'createbigcannons:steel_ingot')
})