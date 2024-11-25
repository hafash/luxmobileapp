// constants/options.ts

// constants/options.ts

export const COUNTRY_OPTIONS = [{label: 'Rwanda', value: 'RW'}];

export const SECTOR_OPTIONS = [{label: 'Construction', value: 'construction'}];

export const SECTOR_SUBSECTORS: Record<
  string,
  {label: string; value: string}[]
> = {
  construction: [
    {label: 'Factories', value: 'factories'},
    {label: 'Suppliers', value: 'suppliers'},
    {label: 'Hardwares', value: 'hardwares'},
    {label: 'Furnitures', value: 'furnitures'},
    {label: 'Quarries Products', value: 'quarries_products'},
    {label: 'Transport & Logistics', value: 'transport_logistics'},
    {label: 'Wooden Products', value: 'wooden_products'},
    {label: 'Equipments & Tools', value: 'equipments_tools'},
    {label: 'Finishing Products', value: 'finishing_products'},
    {label: 'Home Décor, Art & Craft', value: 'home_decor_art_craft'},
    {label: 'Garden Products', value: 'garden_products'},
    {label: 'Real Estate & Plots', value: 'real_estate_plots'},
  ],
};

export const SUBSECTOR_PRODUCTS: Record<
  string,
  {label: string; value: string}[]
> = {
  factories: [
    {label: 'Industrial Machinery', value: 'industrial_machinery'},
    {label: 'Conveyor Belts', value: 'conveyor_belts'},
    {label: 'Packaging Equipment', value: 'packaging_equipment'},
  ],
  suppliers: [
    {label: 'Construction Materials', value: 'construction_materials'},
    {label: 'Cement & Concrete', value: 'cement_concrete'},
    {label: 'Steel & Metal Products', value: 'steel_metal_products'},
  ],
  hardwares: [
    {label: 'Building Supplies', value: 'building_supplies'},
    {label: 'Electrical Tools', value: 'electrical_tools'},
    {label: 'Plumbing Materials', value: 'plumbing_materials'},
  ],
  furnitures: [
    {label: 'Office Furniture', value: 'office_furniture'},
    {label: 'Home Furniture', value: 'home_furniture'},
    {label: 'Outdoor Furniture', value: 'outdoor_furniture'},
  ],
  quarries_products: [
    {label: 'Stone Aggregates', value: 'stone_aggregates'},
    {label: 'Sand & Gravel', value: 'sand_gravel'},
    {label: 'Marble & Granite', value: 'marble_granite'},
  ],
  transport_logistics: [
    {label: 'Heavy Trucks', value: 'heavy_trucks'},
    {label: 'Cargo Services', value: 'cargo_services'},
    {label: 'Construction Vehicles', value: 'construction_vehicles'},
  ],
  wooden_products: [
    {label: 'Timber', value: 'timber'},
    {label: 'Plywood', value: 'plywood'},
    {label: 'Wooden Frames', value: 'wooden_frames'},
  ],
  equipments_tools: [
    {label: 'Power Tools', value: 'power_tools'},
    {label: 'Hand Tools', value: 'hand_tools'},
    {label: 'Machinery', value: 'machinery'},
  ],
  finishing_products: [
    {label: 'Paints', value: 'paints'},
    {label: 'Flooring Materials', value: 'flooring_materials'},
    {label: 'Wall Finishes', value: 'wall_finishes'},
  ],
  home_decor_art_craft: [
    {label: 'Wall Art', value: 'wall_art'},
    {label: 'Decorative Lights', value: 'decorative_lights'},
    {label: 'Handmade Crafts', value: 'handmade_crafts'},
  ],
  garden_products: [
    {label: 'Garden Furniture', value: 'garden_furniture'},
    {label: 'Plant Pots', value: 'plant_pots'},
    {label: 'Garden Tools', value: 'garden_tools'},
  ],
  real_estate_plots: [
    {label: 'Residential Plots', value: 'residential_plots'},
    {label: 'Commercial Spaces', value: 'commercial_spaces'},
    {label: 'Industrial Areas', value: 'industrial_areas'},
  ],
};

export const REFERRAL_OPTIONS = [
  {label: 'Social medias', value: 'Referral 1'},
  {label: 'RIA', value: 'Referral 2'},
  {label: 'Others', value: 'Referral 3'},
];
