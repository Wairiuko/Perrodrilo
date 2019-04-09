// Define a reusable box shape
let collideBox = new BoxShape()
collideBox.withCollisions = true

// Define fixed walls
const wall1 = new Entity()
wall1.add(new Transform({
  position: new Vector3(4, 3, 8),
  scale: new Vector3(8, 5, 0.15)
}))
wall1.add(collideBox)
engine.addEntity(wall1)

const wall2 = new Entity()
wall2.add(new Transform({
  position: new Vector3(8, 3.05, 4.15),
  scale: new Vector3(0.15, 7.75, 5),
  rotation: Quaternion.Euler(-90,0,0)
}))
wall2.add(collideBox)
engine.addEntity(wall2)

// Create Materials
//Material for textures
/*let dadaDrawings = new Material()
dadaDrawings.albedoTexture = "materials/wall1.png"

let dadaSimon = new Material()
dadaSimon.albedoTexture = "materials/wall2.png"


wall1.add(dadaDrawings)
wall2.add(dadaSimon)*/

//Use BasicMaterial for good lighting
let dadaSubasta1 = new BasicMaterial()
dadaSubasta1.texture = "materials/wall1.png"

let dadaSubasta2 = new BasicMaterial()
dadaSubasta2.texture = "materials/wall2.png"

wall1.add(dadaSubasta1)
wall2.add(dadaSubasta2)

//Add gallery scenery
const dadaGallery = new Entity()
dadaGallery.add(new GLTFShape("models/dada.gltf"))
dadaGallery.add(new Transform({
  position: new Vector3(5, 0, 5)
}))
engine.addEntity(dadaGallery)