import React, { useState, type ChangeEvent, type FormEvent } from "react";
import { Upload, FileText, CheckCircle } from "lucide-react";

const Career: React.FC = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  // Type-safe file change handler
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  // Optional: Type-safe submit handler stub
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section className="w-full my-[7vh] min-h-[90vh] px-[1vw] h-fit py-[4vh] text-center flex flex-col gap-1.5 relative">
      {/* Background Grid */}
      <img
        src="/grid.png"
        alt="grid"
        className="h-[90vh] max-w-full absolute top-[calc(50%+4vh)] left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-50"
      />

      {/* Header */}
      <h2 className="text-[24px] leading-[130%] tracking-[-1] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold px-4 mb-8">
        Join Our <span className="text-[#0F6089]">Team</span>
      </h2>

      {/* Form Container */}
      <div className="w-full max-w-[800px] mx-auto bg-white/60 backdrop-blur-sm p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full text-start"
        >
          <h3 className="font-semibold text-xl md:text-2xl mb-2">
            Submit your <span className="text-[#0F6089]">Application</span>
          </h3>
          <p className="text-[14px] md:text-[16px] text-gray-600 mb-8">
            We are always looking for talented individuals.
          </p>

          {/* Row 1: Name */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full font-semibold text-[14px] md:text-[16px]">
            <div className="w-full md:w-1/2 flex flex-col gap-1 items-start">
              <label htmlFor="f_name">
                <span className="pl-2">First Name</span>
              </label>
              <input
                required
                type="text"
                name="f_name"
                id="f_name"
                className="form-field w-full text-[12px] p-3 rounded-md border border-gray-300 focus:border-[#0F6089] outline-none transition-colors"
                placeholder="Enter your First Name"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-1 items-start">
              <label htmlFor="l_name">
                <span className="pl-2">Last Name</span>
              </label>
              <input
                required
                type="text"
                name="l_name"
                id="l_name"
                className="form-field w-full text-[12px] p-3 rounded-md border border-gray-300 focus:border-[#0F6089] outline-none transition-colors"
                placeholder="Enter your Last Name"
              />
            </div>
          </div>

          {/* Row 2: Contact Info */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full font-semibold text-[14px] md:text-[16px] mt-6 md:mt-8">
            <div className="w-full md:w-1/2 flex flex-col gap-1 items-start">
              <label htmlFor="email">
                <span className="pl-2">Email Address</span>
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                className="form-field w-full text-[12px] p-3 rounded-md border border-gray-300 focus:border-[#0F6089] outline-none transition-colors"
                placeholder="Enter your Email"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-1 items-start">
              <label htmlFor="phone">
                <span className="pl-2">Phone Number</span>
              </label>
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                className="form-field w-full text-[12px] p-3 rounded-md border border-gray-300 focus:border-[#0F6089] outline-none transition-colors"
                placeholder="Enter your Phone"
              />
            </div>
          </div>

          {/* Row 3: Position & Portfolio */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full font-semibold text-[14px] md:text-[16px] mt-6 md:mt-8">
            <div className="w-full md:w-1/2 flex flex-col gap-1 items-start">
              <label htmlFor="position">
                <span className="pl-2">Preffered Position</span>
              </label>
              <input
                required
                type="text"
                name="position"
                id="position"
                className="form-field w-full text-[12px] p-3 rounded-md border border-gray-300 focus:border-[#0F6089] outline-none transition-colors"
                placeholder="e.g. Frontend Developer"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-1 items-start">
              <label htmlFor="portfolio">
                <span className="pl-2">Portfolio/LinkedIn URL</span>
              </label>
              <input
                type="url"
                name="portfolio"
                id="portfolio"
                className="form-field w-full text-[12px] p-3 rounded-md border border-gray-300 focus:border-[#0F6089] outline-none transition-colors"
                placeholder="https://..."
              />
            </div>
          </div>

          {/* Row 4: CV Upload */}
          <div className="flex w-full font-semibold text-[14px] md:text-[16px] mt-6 md:mt-8">
            <div className="w-full flex flex-col gap-1 items-start">
              <span className="pl-2">Upload CV / Resume</span>

              <label
                htmlFor="cv_upload"
                className={`w-full group cursor-pointer flex flex-col items-center justify-center border-2 border-dashed ${
                  fileName
                    ? "border-[#0F6089] bg-[#0F6089]/5"
                    : "border-gray-300 hover:border-[#0F6089] hover:bg-gray-50"
                } rounded-lg p-6 transition-all duration-300`}
              >
                <div className="flex flex-col items-center gap-2 text-center">
                  {/* Lucide Icon Handling */}
                  {fileName ? (
                    <CheckCircle className="w-8 h-8 text-[#0F6089]" />
                  ) : (
                    <Upload className="w-8 h-8 text-gray-400 group-hover:text-[#0F6089] transition-colors" />
                  )}

                  <div className="text-[12px] md:text-[14px] font-normal text-gray-600">
                    {fileName ? (
                      <span className="font-semibold text-[#0F6089]">
                        {fileName}
                      </span>
                    ) : (
                      <span>
                        <span className="font-semibold text-[#0F6089]">
                          Click to upload
                        </span>{" "}
                        or drag and drop
                        <br /> PDF, DOCX (Max 5MB)
                      </span>
                    )}
                  </div>
                </div>

                <input
                  type="file"
                  id="cv_upload"
                  required
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>

          {/* Row 5: Cover Letter */}
          <div className="flex w-full font-semibold text-[14px] md:text-[16px] mt-6 md:mt-8">
            <div className="w-full flex flex-col gap-1 items-start">
              <label htmlFor="cover_letter">
                <span className="pl-2">Cover Letter</span>
              </label>
              <textarea
                rows={4}
                name="cover_letter"
                id="cover_letter"
                className="form-field-textarea resize-none min-h-[120px] w-full text-[12px] p-3 rounded-md border border-gray-300 focus:border-[#0F6089] outline-none transition-colors"
                placeholder="Tell us a bit about yourself..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center w-full font-semibold text-[14px] md:text-[16px] mt-8 md:mt-10">
            <button
              type="submit"
              className="w-full md:w-auto px-10 whitespace-nowrap flex justify-center items-center gap-2 text-[16px] font-semibold py-3 text-white rounded-full bg-[#0F6089] hover:shadow-[0_4px_32px_0_rgba(15,96,137,0.5)] duration-300 transition shadow-[0px_4px_4px_rgba(77,77,77,0.25),inset_0px_4px_4px_rgba(255,255,255,0.25)] group cursor-pointer"
            >
              Submit Application
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group-hover:translate-x-1 transition duration-300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM15.75 13.5C15.75 13.6989 15.671 13.8897 15.5303 14.0303C15.3897 14.171 15.1989 14.25 15 14.25C14.8011 14.25 14.6103 14.171 14.4697 14.0303C14.329 13.8897 14.25 13.6989 14.25 13.5V10.8103L9.53063 15.5306C9.46094 15.6003 9.37822 15.6556 9.28717 15.6933C9.19613 15.731 9.09855 15.7504 9 15.7504C8.90145 15.7504 8.80387 15.731 8.71283 15.6933C8.62178 15.6556 8.53906 15.6003 8.46937 15.5306C8.39969 15.4609 8.34442 15.3782 8.3067 15.2872C8.26899 15.1961 8.24958 15.0985 8.24958 15C8.24958 14.9015 8.26899 14.8039 8.3067 14.7128C8.34442 14.6218 8.39969 14.5391 8.46937 14.4694L13.1897 9.75H10.5C10.3011 9.75 10.1103 9.67098 9.96967 9.53033C9.82902 9.38968 9.75 9.19891 9.75 9C9.75 8.80109 9.82902 8.61032 9.96967 8.46967C10.1103 8.32902 10.3011 8.25 10.5 8.25H15C15.1989 8.25 15.3897 8.32902 15.5303 8.46967C15.671 8.61032 15.75 8.80109 15.75 9V13.5Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Career;
