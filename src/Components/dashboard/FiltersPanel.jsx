import "./FiltersPanel.css";

export default function FiltersPanel() {
  return (
    <div className="filters-card">
      <div className="filters-row">
        {/* Requirement */}
        <div className="filter-group">
          <label>Filter by Requirement</label>
          <select>
            <option>All Requirements</option>
            <option>Modular Kitchen</option>
            <option>Bedroom Set</option>
            <option>Office Furniture</option>
          </select>
        </div>

        {/* State */}
        <div className="filter-group">
          <label>Filter by State</label>
          <select>
            <option>All States</option>
            <option>Maharashtra</option>
            <option>Delhi</option>
            <option>Gujarat</option>
          </select>
        </div>

        {/* City */}
        <div className="filter-group">
          <label>Filter by City</label>
          <select>
            <option>All Cities</option>
            <option>Mumbai</option>
            <option>Pune</option>
            <option>Delhi</option>
          </select>
        </div>

        {/* Status */}
        <div className="filter-group">
          <label>Filter by Status</label>
          <select>
            <option>All Status</option>
            <option>New</option>
            <option>Contacted</option>
            <option>Quoted</option>
          </select>
        </div>

        {/* Button */}
        <div className="filter-button">
          <button>Filter</button>
        </div>
      </div>
    </div>
  );
}
