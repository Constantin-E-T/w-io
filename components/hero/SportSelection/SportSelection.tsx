import SportSelectionBackground from "./SportSelectionBackground";
import SportSelectionContainer from "./SportSelectionContainer";
import SportSelectionOptions from "./SportSelectionOptions";
import SportSelectionText from "./SportSelectionText";

interface SportSelectionProps {
    onSportSelected?: () => void;
  }

const SportSelection = ({ onSportSelected }: SportSelectionProps) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <SportSelectionBackground />

            <SportSelectionContainer className={`mt-[-30px] sm:mt-0`}>
            <SportSelectionText />
                {/* New Component for the Sports Selection */}
                <SportSelectionOptions onSportSelected={onSportSelected} />
            </SportSelectionContainer>

        </div>
    );
};

export default SportSelection;
