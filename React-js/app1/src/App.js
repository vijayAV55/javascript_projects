
import { CalendarAppointments } from "./Assignments/CalendarAppointments"
import { ChatApplication } from "./Assignments/ChatApplication"
import { EcommerceCart } from "./Assignments/EcommerceCart"
import { GameCharacter } from "./Assignments/GameCharacter"
import { InventoryManagementSystem } from "./Assignments/InventoryManagementSystem"
import { MovieDatabase } from "./Assignments/MovieDatabase"
import { MusicPlayer } from "./Assignments/MusicPlayer"
import { RecipeBook } from "./Assignments/RecipeBook"
import { StudentEnrollmentSystem } from "./Assignments/StudentEnrollmentSystem"

function App() {
  return <div>
    <StudentEnrollmentSystem/>
    <MusicPlayer/>
    <RecipeBook/>
    <MovieDatabase/>
    <ChatApplication/>
    <InventoryManagementSystem/>
    <CalendarAppointments/>
    <GameCharacter/>
  
   
  </div>
}
export default App