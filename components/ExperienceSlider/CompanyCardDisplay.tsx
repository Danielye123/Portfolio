const CompanyCardDisplay = ({ companies, selectedCompany }) => {
  if (!companies || companies.length === 0) return <div>No companies available</div>;

  return (
    <div className="w-[607px]">
      {companies.map((company, index) => (
        <div 
          key={index} 
          className={`company-card bg-[#F3F8FF] rounded-[1px] ${selectedCompany?.id === company.id ? 'selected-class' : ''} hover:bg-[#5CAFFC] rounded-[1px] p-[10px] mb-[10px]`}
        >
          <h3>{company.name}</h3>
          <p>{company.position}</p>
          <p>{company.details}</p>
        </div>
      ))}
    </div>
  );
};

export default CompanyCardDisplay;