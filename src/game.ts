// Define a reusable box shape
let collideBox = new BoxShape()
collideBox.withCollisions = true

// Define a reusable plane shape
let planeShape = new PlaneShape()
planeShape.withCollisions = true

//Define reusable sphere shape
let sphere = new SphereShape()
sphere.withCollisions = true

/*// Define fixed walls
const wall1 = new Entity()
wall1.add(new Transform({
  position: new Vector3(4, 5, 8),
  scale: new Vector3(8, 5, 0.15)
}))
//wall1.add(collideBox)
//wall1.add(planeShape)
wall1.add(sphere)
engine.addEntity(wall1)

const wall2 = new Entity()
wall2.add(new Transform({
  position: new Vector3(8, 5, 4.15),
  scale: new Vector3(0.15, 7.75, 5),
  rotation: Quaternion.Euler(-90,0,0)
}))
wall2.add(collideBox)
engine.addEntity(wall2)

// Create Materials
//Material for textures
let dadaDrawings = new Material()
dadaDrawings.albedoTexture = "materials/wall1.png"

let dadaSimon = new Material()
dadaSimon.albedoTexture = "materials/wall2.png"


wall1.add(dadaDrawings)
wall2.add(dadaSimon)

//Use BasicMaterial for good lighting
let dadaSubasta1 = new BasicMaterial()
dadaSubasta1.texture = "materials/wall_1.png"

let dadaSubasta2 = new BasicMaterial()
dadaSubasta2.texture = "materials/wall_2.png"

wall1.add(dadaSubasta1)
wall2.add(dadaSubasta2)

//Add gallery scenery
const dadaGallery = new Entity()
dadaGallery.add(new GLTFShape("models/dada.gltf"))
dadaGallery.add(new Transform({
  position: new Vector3(5, 0, 5)
}))
engine.addEntity(dadaGallery)*/

//Add ground scenery
const floor = new Entity()
floor.add(new Transform({
  position : new Vector3(5, 0, 5),
  scale: new Vector3(10, 0.15, 10)
}))
let dadaFloor = new Material()
dadaFloor.albedoTexture = "materials/alexfloor.png"
floor.add(collideBox)
floor.add(dadaFloor)
engine.addEntity(floor)

//Add sky scenery
const sky = new Entity()
sky.add(new Transform({
  position: new Vector3(5, 0, 5),
  scale: new Vector3(10, 8, 10)
}))
let perrodrilo = new Material()
perrodrilo.albedoTexture = "materials/boris1.png"
sky.add(perrodrilo)
sky.add(sphere)
//engine.addEntity(sky)

//Add first drawing by Otro
const otroMan = new Entity()
otroMan.add(new Transform({
  position: new Vector3(0.75, 2.55, 7),
  scale: new Vector3(1.3, 1, 0.05)
}))
let otro1 = new BasicMaterial()
otro1.texture = "materials/otro1.png"
otroMan.add(collideBox)
otroMan.add(otro1)
engine.addEntity(otroMan)

//Add second drawing by Boris
const borisCoco = new Entity()
borisCoco.add(new Transform({
  position: new Vector3(2.05, 2.55, 7),
  scale: new Vector3(1.3, 1, 0.05)
}))
let boris1 = new BasicMaterial()
boris1.texture = "materials/boris1.png"
borisCoco.add(collideBox)
borisCoco.add(boris1)
engine.addEntity(borisCoco)

//Add third drawing by Mox
const moxMan = new Entity()
moxMan.add(new Transform({
  position: new Vector3(3.35, 2.55, 7),
  scale: new Vector3(1.3, 1, 0.05)
}))
let mox1 = new BasicMaterial()
mox1.texture = "materials/mox1.png"
moxMan.add(collideBox)
moxMan.add(mox1)
engine.addEntity(moxMan)

//Add fourth drawing by Simon
const simonGirl = new Entity()
simonGirl.add(new Transform({
  position: new Vector3(4.65, 2.55, 7),
  scale: new Vector3(1.3, 1, 0.05),
  //rotation: Quaternion.Euler(-90, 0, 0)
}))
let simon1 = new BasicMaterial()
simon1.texture = "materials/simon1.png"
simonGirl.add(collideBox)
simonGirl.add(simon1)
engine.addEntity(simonGirl)

//Add fifth drawing by Isa
const isaCloud = new Entity()
isaCloud.add(new Transform({
  position: new Vector3(5.95, 2.55, 7),
  scale: new Vector3(1.3, 1, 0.05),
  //rotation: Quaternion.Euler(-90, 0, 0)
}))
let isa1 = new BasicMaterial()
isa1.texture = "materials/isa1.png"
isaCloud.add(collideBox)
isaCloud.add(isa1)
engine.addEntity(isaCloud)

//Add sixth drawing by Serste
const serWoman = new Entity()
serWoman.add(new Transform({
  position: new Vector3(7.25, 2.55, 7),
  scale: new Vector3(1.3, 1, 0.05),
  //rotation: Quaternion.Euler(-90, 0, 0)
}))
let ser1 = new BasicMaterial()
ser1.texture = "materials/ser1.png"
serWoman.add(collideBox)
serWoman.add(ser1)
engine.addEntity(serWoman)

//Add seventh drawing by Marko
const markoMen = new Entity()
markoMen.add(new Transform({
  position: new Vector3(8.55, 2.55, 7),
  scale: new Vector3(1.3, 1, 0.05) 
}))
let marko1 = new BasicMaterial()
marko1.texture = "materials/marko1.png"
markoMen.add(collideBox)
markoMen.add(marko1)
engine.addEntity(markoMen)

//Add eighth drawing by Serste
const serToto = new Entity()
serToto.add(new Transform({
  position: new Vector3(8.9, 2.56, 6.1),
  scale: new Vector3(0.05, 1.3, 1),
  rotation: Quaternion.Euler(-90, 0, 0)
}))
let ser2 = new BasicMaterial()
ser2.texture = "materials/ser2.png"
serToto.add(collideBox)
serToto.add(ser2)
engine.addEntity(serToto)

//Add ninth drawing by Mox
const moxToto = new Entity()
moxToto.add(new Transform({
  position: new Vector3(8.9, 2.56, 4.8),
  scale: new Vector3(0.05, 1.3, 1),
  rotation: Quaternion.Euler(-90, 0, 0)
}))
let mox2 = new BasicMaterial()
mox2.texture = "materials/mox2.png"
moxToto.add(collideBox)
moxToto.add(mox2)
engine.addEntity(moxToto)

//Add 10th drawing by Mox
const moxWoman = new Entity()
moxWoman.add(new Transform({
  position: new Vector3(2.05, 1.55, 6.75),
  scale: new Vector3(0.05, 1.3, 1),
  rotation: Quaternion.Euler(-90, 0, -45)
}))
let mox3 = new BasicMaterial()
mox3.texture = "materials/mox3.png"
moxWoman.add(collideBox)
moxWoman.add(mox3)
engine.addEntity(moxWoman)

//Add 11th drawing by Ophelia
const opheliaEye = new Entity()
opheliaEye.add(new Transform({
  position: new Vector3(2.05, 3.55, 7),
  scale: new Vector3(1.3, 1, 0.05),
}))
let ophelia1 = new BasicMaterial()
ophelia1.texture = "materials/ophelia1.png"
opheliaEye.add(collideBox)
opheliaEye.add(ophelia1)
engine.addEntity(opheliaEye)

//Add 12th drawing by LuShan
const luShan = new Entity()
luShan.add(new Transform({
  position: new Vector3(3.35, 3.55, 7),
  scale: new Vector3(1.3, 1, 0.05),
}))
let lushan1 = new BasicMaterial()
lushan1.texture = "materials/lushan1.png"
luShan.add(collideBox)
luShan.add(lushan1)
engine.addEntity(luShan)

//Add 13th drawing by Otro
const otroCoco = new Entity()
otroCoco.add(new Transform({
  position: new Vector3(3.25, 1.55, 6.75),
  scale: new Vector3(0.05, 1.3, 1),
  rotation: Quaternion.Euler(-90, 0, -45)
}))
let otro2 = new BasicMaterial()
otro2.texture = "materials/otro2.png"
otroCoco.add(collideBox)
otroCoco.add(otro2)
engine.addEntity(otroCoco)

//Add 14th drawing by Serste
const serCity = new Entity()
serCity.add(new Transform({
  position: new Vector3(4.55, 3.55, 6.75),
  scale: new Vector3(0.05, 1.3, 1),
  rotation: Quaternion.Euler(-90, 0, -45)
}))
let ser3 = new BasicMaterial()
ser3.texture = "materials/ser3.png"
serCity.add(collideBox)
serCity.add(ser3)
engine.addEntity(serCity)

//Add 15th drawing by Boris
const borisMan = new Entity()
borisMan.add(new Transform({
  position: new Vector3(6, 3.55, 6.75),
  scale: new Vector3(0.05, 1.3, 1),
  rotation: Quaternion.Euler(-90, 0, -45)
}))
let boris2 = new BasicMaterial()
boris2.texture = "materials/boris2.png"
borisMan.add(collideBox)
borisMan.add(boris2)
engine.addEntity(borisMan)

//Add 16th drawing by Alex
const alexHenry = new Entity()
alexHenry.add(new Transform({
  position: new Vector3(6, 1.55, 6.75),
  scale: new Vector3(0.05, 1.3, 1),
  rotation: Quaternion.Euler(-90, 0, -45)
}))
let alex1 = new BasicMaterial()
alex1.texture = "materials/alex1.png"
alexHenry.add(collideBox)
alexHenry.add(alex1)
engine.addEntity(alexHenry)

//Add 17th drawing by Simon
const simonToto = new Entity()
simonToto.add(new Transform({
  position: new Vector3(8.9, 3.56, 4.8),
  scale: new Vector3(0.05, 1.3, 1),
  rotation: Quaternion.Euler(-90, 0, 0)
}))
let simon2 = new BasicMaterial()
simon2.texture = "materials/simon2.png"
simonToto.add(collideBox)
simonToto.add(simon2)
engine.addEntity(simonToto)
