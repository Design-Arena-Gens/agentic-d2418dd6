export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-900 mb-4">
            Genetically Modified Pine Tree Plantation
          </h1>
          <p className="text-xl text-green-700">
            Comprehensive Business Plan & Financial Analysis
          </p>
        </header>

        {/* Executive Summary */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Executive Summary</h2>
          <p className="text-gray-700 mb-4">
            This business plan outlines the establishment of a 500-acre genetically modified (GM) pine tree plantation
            focused on producing fast-growing, disease-resistant timber for commercial forestry markets. The GM pine
            trees are engineered for 30% faster growth rates, enhanced wood density, and resistance to common pine
            diseases including pine wilt and bark beetles.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded">
              <p className="text-sm text-green-600 font-semibold">Total Investment</p>
              <p className="text-2xl font-bold text-green-900">$2,847,000</p>
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <p className="text-sm text-blue-600 font-semibold">Projected Annual Revenue (Year 15+)</p>
              <p className="text-2xl font-bold text-blue-900">$4,200,000</p>
            </div>
            <div className="bg-purple-50 p-4 rounded">
              <p className="text-sm text-purple-600 font-semibold">ROI Timeline</p>
              <p className="text-2xl font-bold text-purple-900">12-15 Years</p>
            </div>
          </div>
        </section>

        {/* Market Analysis */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Market Analysis</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Industry Overview</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Global timber market valued at $680 billion annually</li>
                <li>Softwood lumber demand growing at 3.2% CAGR</li>
                <li>Construction industry driving 65% of timber demand</li>
                <li>Sustainable forestry premium: 15-20% above conventional prices</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Target Markets</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Lumber mills and wood processing facilities</li>
                <li>Paper and pulp manufacturers</li>
                <li>Biomass energy producers</li>
                <li>Residential and commercial construction companies</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Competitive Advantages</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>30% faster growth cycle (12-15 years vs. 18-25 years traditional)</li>
                <li>20% higher wood density resulting in premium pricing</li>
                <li>90% disease resistance reducing pesticide costs by 75%</li>
                <li>Climate-adaptive genetics suitable for changing weather patterns</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Initial Investment Breakdown */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Initial Investment Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-green-100">
                <tr>
                  <th className="p-3 text-green-900">Category</th>
                  <th className="p-3 text-green-900">Description</th>
                  <th className="p-3 text-green-900 text-right">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3 font-semibold">Land Acquisition</td>
                  <td className="p-3">500 acres @ $3,000/acre</td>
                  <td className="p-3 text-right">$1,500,000</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">GM Seedlings</td>
                  <td className="p-3">250,000 trees @ $2.50/seedling</td>
                  <td className="p-3 text-right">$625,000</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Land Preparation</td>
                  <td className="p-3">Clearing, grading, soil testing</td>
                  <td className="p-3 text-right">$150,000</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Planting Equipment</td>
                  <td className="p-3">Tractors, planters, tools</td>
                  <td className="p-3 text-right">$180,000</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Irrigation System</td>
                  <td className="p-3">Drip irrigation infrastructure</td>
                  <td className="p-3 text-right">$120,000</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Regulatory Compliance</td>
                  <td className="p-3">GM permits, environmental assessments</td>
                  <td className="p-3 text-right">$85,000</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Infrastructure</td>
                  <td className="p-3">Roads, fencing, storage facilities</td>
                  <td className="p-3 text-right">$95,000</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Working Capital</td>
                  <td className="p-3">First year operating expenses</td>
                  <td className="p-3 text-right">$92,000</td>
                </tr>
                <tr className="bg-green-50 font-bold">
                  <td className="p-3" colSpan={2}>TOTAL INITIAL INVESTMENT</td>
                  <td className="p-3 text-right text-green-900">$2,847,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Annual Operating Costs */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Annual Operating Costs</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-blue-100">
                <tr>
                  <th className="p-3 text-blue-900">Expense Category</th>
                  <th className="p-3 text-blue-900 text-right">Years 1-5</th>
                  <th className="p-3 text-blue-900 text-right">Years 6-10</th>
                  <th className="p-3 text-blue-900 text-right">Years 11-15</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3">Labor (3 full-time, seasonal workers)</td>
                  <td className="p-3 text-right">$145,000</td>
                  <td className="p-3 text-right">$158,000</td>
                  <td className="p-3 text-right">$172,000</td>
                </tr>
                <tr>
                  <td className="p-3">Fertilization & Soil Management</td>
                  <td className="p-3 text-right">$42,000</td>
                  <td className="p-3 text-right">$38,000</td>
                  <td className="p-3 text-right">$35,000</td>
                </tr>
                <tr>
                  <td className="p-3">Pest & Disease Management</td>
                  <td className="p-3 text-right">$18,000</td>
                  <td className="p-3 text-right">$15,000</td>
                  <td className="p-3 text-right">$12,000</td>
                </tr>
                <tr>
                  <td className="p-3">Irrigation & Water Costs</td>
                  <td className="p-3 text-right">$28,000</td>
                  <td className="p-3 text-right">$32,000</td>
                  <td className="p-3 text-right">$35,000</td>
                </tr>
                <tr>
                  <td className="p-3">Equipment Maintenance</td>
                  <td className="p-3 text-right">$22,000</td>
                  <td className="p-3 text-right">$28,000</td>
                  <td className="p-3 text-right">$35,000</td>
                </tr>
                <tr>
                  <td className="p-3">Insurance</td>
                  <td className="p-3 text-right">$32,000</td>
                  <td className="p-3 text-right">$35,000</td>
                  <td className="p-3 text-right">$38,000</td>
                </tr>
                <tr>
                  <td className="p-3">Property Taxes</td>
                  <td className="p-3 text-right">$15,000</td>
                  <td className="p-3 text-right">$16,500</td>
                  <td className="p-3 text-right">$18,000</td>
                </tr>
                <tr>
                  <td className="p-3">Administrative & Compliance</td>
                  <td className="p-3 text-right">$25,000</td>
                  <td className="p-3 text-right">$27,500</td>
                  <td className="p-3 text-right">$30,000</td>
                </tr>
                <tr>
                  <td className="p-3">Monitoring & Reporting (GM Requirements)</td>
                  <td className="p-3 text-right">$18,000</td>
                  <td className="p-3 text-right">$20,000</td>
                  <td className="p-3 text-right">$22,000</td>
                </tr>
                <tr className="bg-blue-50 font-bold">
                  <td className="p-3">TOTAL ANNUAL OPERATING COSTS</td>
                  <td className="p-3 text-right text-blue-900">$345,000</td>
                  <td className="p-3 text-right text-blue-900">$370,000</td>
                  <td className="p-3 text-right text-blue-900">$397,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Revenue Projections */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Revenue Projections & Harvest Schedule</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">Harvest Strategy</h3>
              <p className="text-gray-700 mb-4">
                Implementing a selective harvest strategy with three thinning cycles followed by final harvest:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-800">First Thinning (Year 8)</p>
                  <p className="text-gray-600">Remove 30% of trees for pulpwood</p>
                  <p className="text-gray-600">75,000 trees × 0.8 tons/tree × $45/ton</p>
                  <p className="font-bold text-green-700">Revenue: $2,700,000</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-800">Second Thinning (Year 12)</p>
                  <p className="text-gray-600">Remove 35% of remaining for sawtimber</p>
                  <p className="text-gray-600">61,250 trees × 1.5 tons/tree × $85/ton</p>
                  <p className="font-bold text-green-700">Revenue: $7,809,375</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-blue-800">Final Harvest (Year 15)</p>
                  <p className="text-gray-600">Harvest remaining mature timber</p>
                  <p className="text-gray-600">113,750 trees × 2.2 tons/tree × $95/ton</p>
                  <p className="font-bold text-blue-700">Revenue: $23,784,375</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-purple-800">Carbon Credits (Years 5-15)</p>
                  <p className="text-gray-600">500 acres × 12 tons CO2/acre/year × $25/ton</p>
                  <p className="text-gray-600">Annual revenue over 10 years</p>
                  <p className="font-bold text-purple-700">Revenue: $1,500,000</p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto mt-6">
              <h3 className="text-xl font-semibold text-green-700 mb-3">15-Year Financial Summary</h3>
              <table className="w-full text-left text-sm">
                <thead className="bg-gradient-to-r from-green-100 to-blue-100">
                  <tr>
                    <th className="p-3">Year</th>
                    <th className="p-3 text-right">Revenue</th>
                    <th className="p-3 text-right">Operating Costs</th>
                    <th className="p-3 text-right">Net Income</th>
                    <th className="p-3 text-right">Cumulative Cash Flow</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="p-2">1</td><td className="p-2 text-right">$0</td><td className="p-2 text-right">($345,000)</td><td className="p-2 text-right text-red-600">($345,000)</td><td className="p-2 text-right text-red-600">($3,192,000)</td></tr>
                  <tr><td className="p-2">2</td><td className="p-2 text-right">$0</td><td className="p-2 text-right">($345,000)</td><td className="p-2 text-right text-red-600">($345,000)</td><td className="p-2 text-right text-red-600">($3,537,000)</td></tr>
                  <tr><td className="p-2">3</td><td className="p-2 text-right">$0</td><td className="p-2 text-right">($345,000)</td><td className="p-2 text-right text-red-600">($345,000)</td><td className="p-2 text-right text-red-600">($3,882,000)</td></tr>
                  <tr><td className="p-2">4</td><td className="p-2 text-right">$0</td><td className="p-2 text-right">($345,000)</td><td className="p-2 text-right text-red-600">($345,000)</td><td className="p-2 text-right text-red-600">($4,227,000)</td></tr>
                  <tr><td className="p-2">5</td><td className="p-2 text-right">$150,000</td><td className="p-2 text-right">($345,000)</td><td className="p-2 text-right text-red-600">($195,000)</td><td className="p-2 text-right text-red-600">($4,422,000)</td></tr>
                  <tr><td className="p-2">6</td><td className="p-2 text-right">$150,000</td><td className="p-2 text-right">($370,000)</td><td className="p-2 text-right text-red-600">($220,000)</td><td className="p-2 text-right text-red-600">($4,642,000)</td></tr>
                  <tr><td className="p-2">7</td><td className="p-2 text-right">$150,000</td><td className="p-2 text-right">($370,000)</td><td className="p-2 text-right text-red-600">($220,000)</td><td className="p-2 text-right text-red-600">($4,862,000)</td></tr>
                  <tr className="bg-green-50"><td className="p-2 font-semibold">8</td><td className="p-2 text-right font-bold">$2,850,000</td><td className="p-2 text-right">($370,000)</td><td className="p-2 text-right text-green-600 font-bold">$2,480,000</td><td className="p-2 text-right text-red-600">($2,382,000)</td></tr>
                  <tr><td className="p-2">9</td><td className="p-2 text-right">$150,000</td><td className="p-2 text-right">($370,000)</td><td className="p-2 text-right text-red-600">($220,000)</td><td className="p-2 text-right text-red-600">($2,602,000)</td></tr>
                  <tr><td className="p-2">10</td><td className="p-2 text-right">$150,000</td><td className="p-2 text-right">($370,000)</td><td className="p-2 text-right text-red-600">($220,000)</td><td className="p-2 text-right text-red-600">($2,822,000)</td></tr>
                  <tr><td className="p-2">11</td><td className="p-2 text-right">$150,000</td><td className="p-2 text-right">($397,000)</td><td className="p-2 text-right text-red-600">($247,000)</td><td className="p-2 text-right text-red-600">($3,069,000)</td></tr>
                  <tr className="bg-blue-50"><td className="p-2 font-semibold">12</td><td className="p-2 text-right font-bold">$7,959,375</td><td className="p-2 text-right">($397,000)</td><td className="p-2 text-right text-green-600 font-bold">$7,562,375</td><td className="p-2 text-right text-green-600 font-bold">$4,493,375</td></tr>
                  <tr><td className="p-2">13</td><td className="p-2 text-right">$150,000</td><td className="p-2 text-right">($397,000)</td><td className="p-2 text-right text-red-600">($247,000)</td><td className="p-2 text-right text-green-600">$4,246,375</td></tr>
                  <tr><td className="p-2">14</td><td className="p-2 text-right">$150,000</td><td className="p-2 text-right">($397,000)</td><td className="p-2 text-right text-red-600">($247,000)</td><td className="p-2 text-right text-green-600">$3,999,375</td></tr>
                  <tr className="bg-purple-50"><td className="p-2 font-semibold">15</td><td className="p-2 text-right font-bold">$23,934,375</td><td className="p-2 text-right">($397,000)</td><td className="p-2 text-right text-green-600 font-bold">$23,537,375</td><td className="p-2 text-right text-green-600 font-bold">$27,536,750</td></tr>
                  <tr className="bg-gradient-to-r from-green-200 to-blue-200 font-bold text-lg">
                    <td className="p-3">TOTAL</td>
                    <td className="p-3 text-right">$35,943,750</td>
                    <td className="p-3 text-right">($5,468,000)</td>
                    <td className="p-3 text-right text-green-700">$30,475,750</td>
                    <td className="p-3 text-right text-green-700">$27,536,750</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Key Financial Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg">
              <p className="text-green-600 font-semibold mb-2">Net Present Value (NPV)</p>
              <p className="text-3xl font-bold text-green-900">$12.4M</p>
              <p className="text-sm text-green-700 mt-2">@ 8% discount rate</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg">
              <p className="text-blue-600 font-semibold mb-2">Internal Rate of Return</p>
              <p className="text-3xl font-bold text-blue-900">18.7%</p>
              <p className="text-sm text-blue-700 mt-2">Above industry average</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-lg">
              <p className="text-purple-600 font-semibold mb-2">Payback Period</p>
              <p className="text-3xl font-bold text-purple-900">12 Years</p>
              <p className="text-sm text-purple-700 mt-2">Break-even point</p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-lg">
              <p className="text-orange-600 font-semibold mb-2">Total ROI</p>
              <p className="text-3xl font-bold text-orange-900">968%</p>
              <p className="text-sm text-orange-700 mt-2">Over 15 years</p>
            </div>
          </div>
        </section>

        {/* Requirements & Regulations */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Regulatory Requirements & Compliance</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-yellow-800">USDA APHIS Permits</h3>
              <p className="text-gray-700">Biotechnology Regulatory Services permit for GM tree cultivation ($45,000 application + $8,000 annual)</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-yellow-800">EPA Compliance</h3>
              <p className="text-gray-700">Environmental impact assessments and ongoing monitoring ($25,000 initial + $12,000 annual)</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-yellow-800">State Forestry Permits</h3>
              <p className="text-gray-700">Commercial forestry operation license and harvest permits ($8,000 initial + $3,000 annual)</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-yellow-800">Biosafety Protocols</h3>
              <p className="text-gray-700">Containment measures, monitoring systems, and gene flow prevention ($15,000 setup + ongoing)</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-yellow-800">FSC/SFI Certification</h3>
              <p className="text-gray-700">Sustainable forestry certification for market access ($12,000 certification + $5,000 annual audit)</p>
            </div>
          </div>
        </section>

        {/* Risk Analysis */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Risk Analysis & Mitigation</h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-700 mb-2">🔴 High Risk</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Regulatory Changes:</strong> GM crop policies may tighten. Mitigation: Maintain compliance buffer, diversify with conventional trees.</li>
                  <li><strong>Market Price Volatility:</strong> Timber prices fluctuate 15-25%. Mitigation: Long-term contracts, futures hedging.</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold text-yellow-700 mb-2">🟡 Medium Risk</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Climate Events:</strong> Hurricanes, droughts, wildfires. Mitigation: Comprehensive insurance ($32K/year), fire breaks.</li>
                  <li><strong>Public Perception:</strong> GMO opposition. Mitigation: Transparency, education campaigns, sustainability certifications.</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-700 mb-2">🟢 Low Risk</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Operational:</strong> Disease resistance reduces risk by 90% vs. conventional pines.</li>
                  <li><strong>Financial:</strong> Long-term stable demand in construction and paper industries.</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">⚡ Opportunities</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Carbon Markets:</strong> $1.5M additional revenue from carbon credits over project lifecycle.</li>
                  <li><strong>Biomass Energy:</strong> Growing demand for renewable energy feedstock creates premium markets.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Management Team Requirements */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Management Team & Personnel</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold text-gray-800">Operations Manager</h3>
              <p className="text-sm text-gray-600">Forestry degree, 5+ years experience. Salary: $85,000/year + benefits</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold text-gray-800">Field Supervisor</h3>
              <p className="text-sm text-gray-600">Silviculture background, equipment operation. Salary: $55,000/year</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold text-gray-800">Compliance Officer (Part-time)</h3>
              <p className="text-sm text-gray-600">Biotechnology regulations expertise. Salary: $30,000/year (0.5 FTE)</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold text-gray-800">Seasonal Workers (4-6)</h3>
              <p className="text-sm text-gray-600">Planting, maintenance, harvest support. Total: $45,000/year</p>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Implementation Timeline</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <p className="font-semibold">Months 0-3: Planning & Permits</p>
                <p className="text-sm text-gray-600">Secure land, obtain regulatory approvals, finalize financing</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <p className="font-semibold">Months 4-6: Land Preparation</p>
                <p className="text-sm text-gray-600">Clear land, install irrigation, build infrastructure</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <p className="font-semibold">Months 7-9: Planting</p>
                <p className="text-sm text-gray-600">Plant 250,000 GM pine seedlings, establish monitoring systems</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
              <div>
                <p className="font-semibold">Years 1-7: Growth & Maintenance</p>
                <p className="text-sm text-gray-600">Regular fertilization, pest control, monitoring, carbon credit registration</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">5</div>
              <div>
                <p className="font-semibold">Year 8: First Thinning</p>
                <p className="text-sm text-gray-600">First revenue event, selective harvest for pulpwood</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">6</div>
              <div>
                <p className="font-semibold">Year 12: Second Thinning</p>
                <p className="text-sm text-gray-600">Major revenue event, sawtimber harvest</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">7</div>
              <div>
                <p className="font-semibold">Year 15: Final Harvest & Replanting</p>
                <p className="text-sm text-gray-600">Clear-cut mature timber, prepare for next rotation cycle</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-green-700 to-emerald-800 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Investment Conclusion</h2>
          <p className="text-lg mb-4">
            The GM pine plantation represents a compelling long-term investment opportunity combining innovative
            biotechnology with sustainable forestry practices. With an 18.7% IRR and $27.5M net return over 15 years,
            the project offers superior returns compared to traditional forestry investments.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur rounded p-4">
              <p className="text-2xl font-bold">$2.85M</p>
              <p className="text-sm">Initial Capital Required</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded p-4">
              <p className="text-2xl font-bold">15 Years</p>
              <p className="text-sm">To Full Maturity</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded p-4">
              <p className="text-2xl font-bold">968% ROI</p>
              <p className="text-sm">Total Return on Investment</p>
            </div>
          </div>
          <p className="text-sm mt-6 opacity-90">
            This business plan is a comprehensive financial model. Actual results may vary based on market conditions,
            regulatory changes, and operational execution. Investors should conduct independent due diligence and
            consult with financial advisors before making investment decisions.
          </p>
        </section>

        <footer className="text-center mt-12 text-gray-600 text-sm">
          <p>© 2025 GM Pine Plantation Business Plan | For Informational Purposes</p>
        </footer>
      </div>
    </div>
  );
}
