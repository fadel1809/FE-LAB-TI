/* eslint-disable react/prop-types */
import NavbarUser from "../../components/NavbarUser";
import Wrapper from "../../assets/wrappers/Navbar";
import {useEffect, useState} from "react";
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
import BackButton from "../../components/BackButton";
import Chat from "../../components/Chat.jsx";

// Loader Function
export const loader = async ({ params }) => {
  try {
    const alat = await customFetch.get(
      `v1/peminjaman/alat/${params.id}/all-peminjaman-alat`,
      { withCredentials: true }
    );
    const ruang = await customFetch.get(
      `v1/peminjaman/ruang/${params.id}/all-peminjaman-ruang`,
      { withCredentials: true }
    );
    const dataAlat = alat.data ? alat.data : []; // Assign data or set to empty array
    const dataRuang = ruang.data ? ruang.data : []; // Assign data or set to empty array

    return { dataAlat, dataRuang };
  } catch (error) {
    console.log(error);
    return { dataAlat: [], dataRuang: [] }; // Return empty arrays on error
  }
};

// TabPanel Component
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

// Main Component
const PeminjamanUser = () => {
  const [value, setValue] = useState(0);
  const data = useLoaderData();
    const [userInfo, setUserInfo] = useState({});
  const dataAlat = data.dataAlat.data; // Data untuk peminjaman alat
  const dataRuang = data.dataRuang.data; // Data untuk peminjaman ruang
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    useEffect(() => {
        const fetchMessage = async () => {
            const result = await customFetch("v1/user/current-user", {
                withCredentials: true,
            });
            const { data } = result.data;
            const { user } = data;
            setUserInfo(user);
        };
        fetchMessage();
    }, []);
  return (
    <Wrapper>
      <NavbarUser username={userInfo.username} isPeminjamanSaya={true} />

      <div className="flex justify-center">
        <div
          id="div"
          className="shadow-2xl py-2 mt-5 w-11/12 rounded rounded-md border border-gray-100"
        >
          <BackButton />
            <Chat currentId={userInfo.id}
                  role={userInfo.role}
                  username={userInfo.username}/>
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

          {/* Tab Peminjaman Alat */}
          <TabPanel
            value={value}
            index={0}
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
              color: "#004c84",
            }}
          >
            <div className={"max-h-[19em] overflow-y-scroll"}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow
                      sx={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: "bold",
                        color: "#004c84",
                      }}
                    >
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#004c84",
                        }}
                      >
                        #
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#004c84",
                        }}
                      >
                        Nama
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#004c84",
                        }}
                      >
                        ID
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#004c84",
                        }}
                      >
                        Keperluan
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#004c84",
                        }}
                      >
                        Jenis Barang
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#004c84",
                        }}
                      >
                        Tanggal Peminjaman
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#004c84",
                        }}
                      >
                        Tanggal Pengembalian
                      </TableCell>
                        <TableCell
                            sx={{
                                fontFamily: "Montserrat, sans-serif",
                                fontWeight: "bold",
                                color: "#004c84",
                            }}
                        >
                            Jam Mulai
                        </TableCell>
                        <TableCell
                            sx={{
                                fontFamily: "Montserrat, sans-serif",
                                fontWeight: "bold",
                                color: "#004c84",
                            }}
                        >
                            Jam Selesai
                        </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#004c84",
                        }}
                      >
                        Catatan
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#004c84",
                        }}
                      >
                        Status
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dataAlat != null ? (
                      dataAlat.map((val, index) => (
                        <TableRow key={val.id}>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {index + 1}
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
                            {val.jenis_barang}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {dayjs(val.tanggal_peminjaman).format("DD-MM-YYYY")}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {dayjs(val.tanggal_pengembalian).format(
                              "DD-MM-YYYY"
                            )}
                          </TableCell>
                            <TableCell
                                sx={{
                                    fontFamily: "Montserrat, sans-serif",
                                }}
                            >
                                {val.jam_mulai}
                            </TableCell>
                            <TableCell
                                sx={{
                                    fontFamily: "Montserrat, sans-serif",
                                }}
                            >
                                {val.jam_selesai}
                            </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                                fontSize: "11px"
                            }}
                          >
                            {val.catatan}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {val.status === "validasi_laboran" || val.status === "validasi_kalab"?"processed":val.status==="diterima"?"accepted":val.status==="ditolak"?"rejected":val.status}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell
                          sx={{
                            fontFamily: "Montserrat, sans-serif",
                            textAlign: "center",
                          }}
                          colSpan={9}
                          className="text-center"
                        >
                          Tidak ada peminjaman alat yang terdaftar.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </TabPanel>

          {/* Tab Peminjaman Ruang */}
          <TabPanel value={value} index={1}>
            <div className={"max-h-[19em] overflow-y-scroll"}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#004c84",
                        }}
                      >
                        #
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#004c84",
                        }}
                      >
                        Nama
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#004c84",
                        }}
                      >
                        ID
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#004c84",
                        }}
                      >
                        Keperluan
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#004c84",
                        }}
                      >
                        Ruang
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#004c84",
                        }}
                      >
                        Tanggal Peminjaman
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#004c84",
                        }}
                      >
                        Jam Mulai
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#004c84",
                        }}
                      >
                        Jam Selesai
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#004c84",
                        }}
                      >
                        Catatan
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: "bold",
                          color: "#004c84",
                        }}
                      >
                        Status
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dataRuang != null ? (
                      dataRuang.map((val, index) => (
                        <TableRow key={val.id}>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {index + 1}
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
                          <TableCell>{val.ruang}</TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {dayjs(val.tanggal_peminjaman).format("DD-MM-YYYY")}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {val.jam_mulai}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                            {val.jam_selesai}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                                fontSize: "11px"
                            }}
                          >
                            {val.catatan}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                          >
                              {val.status === "validasi_laboran" || val.status === "validasi_kalab"?"processed":val.status==="diterima"?"accepted":val.status==="ditolak"?"rejected":val.status}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell
                          sx={{
                            fontFamily: "Montserrat, sans-serif",
                            textAlign: "center",
                          }}
                          colSpan={10}
                          className="text-center"
                        >
                          Tidak ada peminjaman ruang yang terdaftar.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </TabPanel>
        </div>
      </div>
    </Wrapper>
  );
};

export default PeminjamanUser;
