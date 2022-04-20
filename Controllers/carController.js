import Car from "./../Models/carModel.js";
import upload from "../App.js";

export const getCars = async (req, res) => {
  try {
    const Cars = await Car.find();
    res.json(Cars);
  } catch (error) {
    res.status(500).json({
      massage: error.massage,
    });
  }
};
export const getCarsById = async (req, res) => {
  try {
    const Cars = await Car.findById(req.params.id);
    res.json(Cars);
  } catch (error) {
    res.status(500).json({
      massage: error.massage,
    });
  }
};
export const createCars = async (req, res) => {
  upload(req, res, (err) => {
    if(err){
      console.log(err)
    }else{
      const newCar = new Car({
        name : req.body.name,
        size : req.body.size,
        type : req.body.type,
        price : req.body.price,
        image : {
          name : req.file.filename,
          contentType : "image/png"
        }
      })
      newCar.save()
      .then(() => res.send("Success"))
      .catch(err => console.log(err))
    }
  })
};
export const updateCars = async (req, res) => {
  try {
    const updatedCars = await Car.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: req.body,
      }
    );
    res.status(200).json(updatedCars);
  } catch (error) {
    res.status(404).json({
      massage: error.massage,
    });
  }
};
export const deleteCars = async (req, res) => {
  try {
    const deletedCars = await Car.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json(deletedCars);
  } catch (error) {
    res.status(404).json({
      massage: error.massage,
    });
  }
};
