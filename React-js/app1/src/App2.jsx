import "./App2.css";
import { BlogPostManager } from "./Parent_child_component/BlogPostManager";
import { CalendarAppointments } from "./Parent_child_component/CalendarAppointments";
import { ChatApplication } from "./Parent_child_component/ChatApplication";

import { EcommerceCart } from "./Parent_child_component/EcommerceCart";
import { EmployeeTimeTracker } from "./Parent_child_component/EmployeeTimeTracker";
import { FitnessChallengeTracke } from "./Parent_child_component/FitnessChallengeTracke";
import { GameCharacter } from "./Parent_child_component/GameCharacter";
import { HotelReservationSystem } from "./Parent_child_component/HotelReservationSystem";
import { InventoryManagementSystem } from "./Parent_child_component/InventoryManagementSystem";
import { LanguageLearningApp } from "./Parent_child_component/LanguageLearningApp";
import { MovieDatabase } from "./Parent_child_component/MovieDatabase";
import { MusicBandManager } from "./Parent_child_component/MusicBandManager";
import { MusicPlayer } from "./Parent_child_component/MusicPlayer";

function App2() {
  return (
    <div>
      <h1>Chaild-components</h1>/
      <BlogPostManager />
      <CalendarAppointments />
      <ChatApplication />
      <EcommerceCart />
      <EmployeeTimeTracker />
      <FitnessChallengeTracke />
      <GameCharacter />
      <HotelReservationSystem />
      <InventoryManagementSystem />
      <LanguageLearningApp />
      <MovieDatabase />
      <MusicBandManager />
      <MusicPlayer />
    </div>
  );
}
export default App2;
