// Strict image mapping according to GNA Logistics enterprise design guidelines

import imgHero from './images/image 1.png';
import imgAbout from './images/image 2.png';
import imgRoofing from './images/image 3.png';
import imgConstruction from './images/image 4.png';
import imgRegionalFreight from './images/image 5.png';
import imgWarehouse from './images/image 6.png';
import imgBuildingMaterials from './images/image 7.png';
import imgTransportation from './images/image 9.png';
import imgMoffett from './images/image 10.png';
import imgMaterialHandling from './images/image 11.png';
import imgLumber from './images/image 12.png';
import imgHeavyPlacement from './images/image 13.png';
import imgWarehouseLogistics from './images/image 14.png';
import imgBuildingMaterialsDelivery from './images/image 15.png';
import imgResidential from './images/image 16.png';
import imgFlatbed from './images/image 17.png';
import imgDistribution from './images/image 18.png';
import imgFleet from './images/image 19.png';
import brandLogo from './images/logo.png';

export const IMAGES = {
  hero: imgHero,                       // image 1: Premium red semi truck driving on open highway
  about: imgAbout,                     // image 2: Professional logistics driver
  roofing: imgRoofing,                 // image 3: Roof workers
  construction: imgConstruction,       // image 4: Construction site
  regionalFreight: imgRegionalFreight, // image 5: Truck on highway
  warehouse: imgWarehouse,             // image 6: Warehouse interior
  buildingMaterials: imgBuildingMaterials,// image 7: Construction materials
  transportation: imgTransportation,   // image 9: Commercial truck
  moffett: imgMoffett,                 // image 10: Truck-mounted forklift unloading
  materialHandling: imgMaterialHandling,// image 11: Warehouse forklift
  lumber: imgLumber,                   // image 12: Lumber yard
  heavyPlacement: imgHeavyPlacement,   // image 13: Forklift moving materials
  warehouseLogistics: imgWarehouseLogistics, // image 14: Warehouse workers
  buildingMaterialsDelivery: imgBuildingMaterialsDelivery, // image 15: Concrete blocks
  residential: imgResidential,         // image 16: House under construction
  flatbed: imgFlatbed,                 // image 17: Orange flatbed truck
  distribution: imgDistribution,       // image 18: Loading docks
  fleet: imgFleet,                     // image 19: Fleet of commercial trucks
  logo: brandLogo,                     // logo.png: Official brand logo
} as const;

export type ImageKey = keyof typeof IMAGES;
