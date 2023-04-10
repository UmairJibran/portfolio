import React from "react";

const Modal = ({ showModal, setShowModal }) => {
  const links = [
    {
      text: "israeli police attacks worshippers at Al Aqsa Mosque during Ramadan",
      link: "https://www.aljazeera.com/news/2023/4/5/israeli-police-attack-worshippers-in-jerusalems-al-aqsa-mosque",
    },
    {
      text: "The UN calls on israel to halt West Bank's demolition",
      link: "https://news.un.org/en/story/2021/02/1084042",
    },
    {
      text: "An Article with links and details about donations",
      link: "https://www.milleworld.com/credible-palestinian-charities-to-donate-to/",
    },
  ];

  return (
    <div onClick={() => setShowModal(false)}>
      {showModal && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="relative bg-white rounded-md w-2/3 max-w-full">
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900">
                  How to help?
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  There are several ways you can help Palestinians. One of the
                  easiest ways is to find a relevant charity that helps
                  Palestinians either living as refugees in a foreign country or
                  one that helps Palestinians living in Palestine and donate
                  either an ongoing monthly sum or one lump sum. Another way is
                  through education and understanding history which will allow
                  people to understand that recent attacks on worshippers during
                  the holy month of Ramadan or the eviction of Palestinian
                  families from their homes in Sheikh Jarrah did not come out of
                  nowhere. You can also donate to organizations such as
                  Palestine Children's Relief Fund (PCRF) which sponsors
                  volunteer medical teams to treat sick and injured Palestinian
                  children in the West Bank and Gaza.
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Below are some of the links to get you started:
                </p>
              </div>

              <div className="mx-6 py-4 bg-gray-50">
                {links.map((link) => (
                  <div className="mx-4">
                    <a
                      key={link.text}
                      href={link.link}
                      className="mr-4 text-sm font-medium text-blue-600 hover:text-blue-500"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.text}
                    </a>
                  </div>
                ))}
              </div>

              <div className="px-6 py-4">
                <p className="text-sm text-gray-500">
                  Spreading the news can be as effective as anything
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
