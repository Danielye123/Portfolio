import { ExperienceState } from "../Experience";

interface CompanyCard  {
  company: ExperienceState;
}

const CompanyCard: React.FC<CompanyCard> = ({ company }) => {
    if (!company) return null;
  
    return (
      <div className="company-card">
        <h3>{company.name}</h3>
        <p>{company.position}</p>
        <p>{company.details}</p>
      </div>
    );
  };
  
  export default CompanyCard;
  