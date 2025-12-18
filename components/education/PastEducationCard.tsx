import DropdownCard from "../ui/DropdownCard";

export default function PastEducationCard() {
  return (
    <DropdownCard
      image="/images/logos/StClair-1.png"
      title="Past Education"
      color="bg-gray-100"
    >
      <DropdownCard
        title="Mechanical Technician - CAD/CAM"
        listDetails={["Credential: Diploma", "Year: 2022"]}
        description="CAD/CAM technicians decide how a product is to be manufactured, what types of machines are to be used, and the machining sequence required to manufacture 
        components to industrial standards. This program prepares graduates to become Computer Aided Designers (CAD), Computer Aided Manufacturing (CAM) specialists, 
        Computerized Numerical Control (CNC) programmers and General Machinists/CNC."
      />

      <DropdownCard
        title="Carpentry and Renovation Techniques"
        listDetails={["Credential: Certificate", "Year: 2018"]}
        description="This program provides the student with a solid foundation in areas closely connected to the construction and renovation industry. 
        The variety of skills acquired in this program will enable the graduate to be a valuable asset to any contractor. These skills include 
        framing, roofing, siding, flooring, drywall, window and door installation, decks and outdoor structures."
      />
    </DropdownCard>
  );
}
