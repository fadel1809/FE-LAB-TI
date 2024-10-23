/* eslint-disable react/prop-types */
import NavbarUser from "../../components/NavbarUser"
import Wrapper from "../../assets/wrappers/Navbar"
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import customFetch from "../../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import dayjs from "dayjs";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import BackButton from "../../components/BackButton"
export const loader = async ({params}) => {
  try {
    const alat = await customFetch.get(`v1/peminjaman/alat/${params.id}/all-peminjaman-alat`,{withCredentials:true})
    const ruang = await customFetch.get(`v1/peminjaman/ruang/${params.id}/all-peminjaman-ruang`,{withCredentials:true})
    const dataAlat = alat.data
    const dataRuang = ruang.data
    return {dataAlat,dataRuang}
  } catch (error) {
    console.log(error)
  }
}
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
const PeminjamanUser = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const data = useLoaderData()
  const dataAlat = data.dataAlat.data
  const dataRuang = data.dataRuang.data
  let no = 1;
  let noRuang = 1
  return (
    <Wrapper>
      <NavbarUser isPeminjamanSaya={true} />
      <div className="flex justify-center">
        <div
          id="div"
          className="shadow-2xl py-4 mt-10 w-3/4 rounded rounded-md border border-gray-100"
        >
          <BackButton />
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="page tabs example"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            centered
          >
            <Tab
              label="Peminjaman Alat"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
                color: "#004c84",
              }}
            />
            <Tab
              label="Peminjaman Ruang"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
                color: "#004c84",
              }}
            />
          </Tabs>
          <TabPanel
            value={value}
            index={0}
            sx={{
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            <div className="">
              <TableContainer
                component={Paper}
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                <Table className="shadow-xl">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        No
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Nama
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        ID
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Keperluan
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Jenis Barang
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Tanggal Peminjaman
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Tanggal Pengembalian
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Catatan
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Status
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    {dataAlat.map((val) => {
                      return (
                        <TableRow key={val.id}>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {no++}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {val.nama}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {val.nidn}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {val.keperluan}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {val.jenis_barang}{" "}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {dayjs(val.tanggal_peminjaman).format("DD-MM-YYYY")}{" "}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {dayjs(val.tanggal_pengembalian).format(
                              "DD-MM-YYYY"
                            )}{" "}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {val.catatan}{" "}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {val.status}{" "}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </TabPanel>
          <TabPanel
            value={value}
            index={1}
            sx={{
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            <div>
              <TableContainer component={Paper}>
                <Table className="shadow-xl">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        No
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Nama
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        ID
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Keperluan
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Ruang
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Tanggal Peminjaman
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Jam Mulai
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Jam Selesai
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Catatan
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                        }}
                      >
                        Status
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    {dataRuang.map((val) => {
                      return (
                        <TableRow key={val.id}>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {noRuang++}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {val.nama}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {val.nim}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {val.keperluan}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {val.ruang}{" "}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {dayjs(val.tanggal_peminjaman).format("DD-MM-YYYY")}{" "}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {val.jam_mulai}{" "}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {val.jam_selesai}{" "}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {val.catatan}{" "}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {val.status}{" "}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </TabPanel>
        </div>
      </div>
    </Wrapper>
  );

}
export default PeminjamanUser