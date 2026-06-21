import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Translator from "./pages/Translator";
import Generator from "./pages/Generator";

function AnimatedRoutes() {
const location = useLocation();

return ( <AnimatePresence mode="wait">
<motion.div
key={location.pathname}
initial={{
opacity: 0,
y: 20,
}}
animate={{
opacity: 1,
y: 0,
}}
exit={{
opacity: 0,
y: -20,
}}
transition={{
duration: 0.4,
}}
> <Routes location={location}>
<Route path="/" element={<Home />} />
<Route path="/translator" element={<Translator />} />
<Route path="/generator" element={<Generator />} /> </Routes>
</motion.div> </AnimatePresence>
);
}

function App() {
return ( <BrowserRouter> <Navbar /> <AnimatedRoutes /> </BrowserRouter>
);
}

export default App;
