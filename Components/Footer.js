export default function Footer() {
  return (
    <>
      <div className="w-[100%] h-[auto] bg-[#011627] pt-[30px] pb-[30px] flex flex-wrap gap-7 items-center">
        <div className="text-white w-[450px] p-5">
          <h3 className="text-[25px] text-white font-bold mb-5">About</h3>
          <p className='leading-9'>
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur.Duis sed odio sit amet nibh vulputate cursus a sit amet
            mauris. Morbi accumsan ipsum velit nam nec tellus a odio tincidunt
            auctor a ornare conubia nostra.
          </p>
        </div>
        <div className="text-white w-[350px] p-5 ">
          <h3 className="text-[25px] text-white font-bold mb-5">Services</h3>
          <ul className="list-none text-white text-[17px] m-2">
            <li className="mb-3">Study nature</li>
            <li className="mb-3">Nature is a gift</li>
            <li className="mb-3">A second spring</li>
            <li className="mb-3">Smiles of nature</li>
          </ul>
        </div>
        <div className="text-white w-[350px] p-5 ">
          <h3 className="text-[25px] text-white font-bold mb-5">Contact</h3>
          <p className="mb-3">
            Proin gravida nibh auctor aliquet amet anean sollicitudin, lorem
            quis.
            <br /> 12 Avenue, New York, NY 10160 <br /> +1 910-626-85255 <br />
            contact@nature.com
          </p>
        </div>
      </div>
    </>
  );
}
