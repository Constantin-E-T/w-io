import SportSelectionBackground from "./SportSelectionBackground";
import SportSelectionContainer from "./SportSelectionContainer";
import SportSelectionOptions from "./SportSelectionOptions";
import SportSelectionText from "./SportSelectionText";

const SportSelection = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <SportSelectionBackground />

            <SportSelectionContainer className={`mt-[-30px] sm:mt-0`}>
            <SportSelectionText />
                {/* New Component for the Sports Selection */}
                <SportSelectionOptions />
            </SportSelectionContainer>

        </div>
    );
};

export default SportSelection;
