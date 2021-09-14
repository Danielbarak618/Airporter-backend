import Departures from "../interfaces/departures";
import mongoose , {Schema} from 'mongoose'


const DepartureSchema:Schema = new Schema({
    arrivalAirportCandidatesCount:Number,
    callsign:String,
    departureAirportCandidatesCount:Number,
    estArrivalAirport:String,
    estArrivalAirportHorizDistance:Number,
    estArrivalAirportVertDistance:Number,
    estDepartureAirport:String,
    estDepartureAirportHorizDistance:Number,
    estDepartureAirportVertDistance:Number,
    firstSeen:Number,
    icao24:String,
    lastSeen:Number,
    status:String
}
)

export default mongoose.model<Departures>('Departures' , DepartureSchema)