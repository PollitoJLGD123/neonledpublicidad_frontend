"use client"

export const CompanyValues = ({ companyValues }) => {
  return (
    <section className="bg-[#B7E5FD] rounded-lg py-11 px-6">
      <h2 className="text-2xl font-bold text-center mb-8 text-black">VALORES</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 gap-y-16">
        {/* Values cards */}
        {companyValues.map((item, index) => {
          return (
            <div key={index} className="text-center">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 ${item.bgColor} rounded-full flex items-center justify-center mb-2`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-black text-xs md:text-sm">{item.title}</h3>
                <p className="text-blue-600 font-bold text-xs md:text-sm">{item.value}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
