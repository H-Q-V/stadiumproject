const Stadium = require("../model/stadium");

const stadiumControllers = {
   async getAllStadium (req,res) {
      try {
         const [stadiums, file] = await Stadium.findAll();
         res.status(200).json({count: stadiums.length, stadiums});
         
      } catch(error){
         res.status(500).json(error);

      }
   },
 
 async createNewStadium (req,res)  {
      try{
        const {stadium_name, address, phone, Stadium_style_id, Staff_id} = req.body;
        const stadium = new Stadium(stadium_name, address, phone, Stadium_style_id, Staff_id);
        const saveStadium  = await stadium.save();
        res.status(200).json(saveStadium);
      } catch (error){
        //next(error);
        res.status(500).json(error);
      }
 },
 
 async getStadiumById (req, res) {
    try {
       let stadiumId = req.params.id;
       let [stadium, _] = await Stadium.findById(stadiumId);
       res.status(200).json({ stadium: stadium[0] });
    } catch (error){
      res.status(500).json(error);

    }
 }
}

module.exports = stadiumControllers;

