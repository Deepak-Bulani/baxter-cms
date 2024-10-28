import React, { useState } from 'react';

const DialysisCenterTable = () => {
  const data = [
    { name: 'Center A', id: 'DC001', address: '123 Main St', role: 'Admin' },
    { name: 'Center B', id: 'DC002', address: '456 Elm St', role: 'Staff' },
    { name: 'Center C', id: 'DC003', address: '789 Oak St', role: 'Doctor' },
    { name: 'Center D', id: 'DC004', address: '101 Pine St', role: 'Nurse' },
    { name: 'Center E', id: 'DC005', address: '102 Maple St', role: 'Staff' },
    { name: 'Center F', id: 'DC006', address: '103 Cedar St', role: 'Admin' },
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);


  //     try {
  //       const response = await fetch(
  //         `https://api.example.com/centers?page=${currentPage}&limit=${itemsPerPage}`
  //       );
  //       const result = await response.json();

  //       setData(result.centers);
  //       setTotalPages(Math.ceil(result.totalItems / itemsPerPage)); 
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [currentPage]); 
  // const handlePageChange = pageNumber => {
  //   if (pageNumber >= 1 && pageNumber <= totalPages) {
  //     setCurrentPage(pageNumber);
  //   }
  // };

  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(prevPage => prevPage + 1);
  //   }
  // };

  const handlePageChange = pageNumber => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="m-4 border border-[#999] border-b-5 border-b-[#6C8CB3] rounded-b-[3px] mb-5">
      <table className="min-w-full text-left">
        <thead>
          <tr className="bg-[#6c8cb3] min-h-[10px] leading-[20px] text-[12px] text-white">
            <th className="px-4 py-2">Name of dialysis center</th>
            <th className="px-4 py-2 border-l border-gray-400">Dialysis Center ID</th>
            <th className="px-4 py-2 border-l border-gray-400">Address</th>
            <th className="px-4 py-2 border-l border-gray-400">Role</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2 border-l border-gray-400">{item.id}</td>
              <td className="px-4 py-2 border-l border-gray-400">{item.address}</td>
              <td className="px-4 py-2 border-l border-gray-400">{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center px-2 py-1 bg-[#6c8cb3] min-h-[10px] leading-[20px] text-[12px] text-white">
        <span>
          Files {currentPage * itemsPerPage - itemsPerPage + 1} to{' '}
          {Math.min(currentPage * itemsPerPage, data.length)} of {data.length}
        </span>

        <div>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`mx-1 px-3 py-1 border rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-500' : 'bg-blue text-white'}`}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 border rounded ${
                currentPage === index + 1 ? 'bg-gray-500 text-black' : 'bg-blue text-white'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`mx-1 px-3 py-1 border rounded ${currentPage === totalPages ? 'bg-gray-300 text-gray-500' : 'bg-blue text-white'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialysisCenterTable;
