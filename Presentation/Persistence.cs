using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace Presentation
{
    public class Persistence
    {
        private string _connectionString;
        public Persistence()
        {
            _connectionString = "server=localhost;user id=root;database=poker;Password='Test123'";
        }
        public Boolean userNameAvailable(string username)
        {
            Boolean result = false;

            MySqlConnection conn = new MySqlConnection(_connectionString);
            MySqlCommand cmd = new MySqlCommand(/*COMMAND*/, conn);

            conn.Open();
                       
            MySqlDataReader dataReader = cmd.ExecuteReader();
            string strResult = string.Empty;
            strResult = Convert.ToString(cmd.ExecuteScalar());

            if(strResult == string.Empty)
            {
                result = true;
            }
            else
            {
                result = false;
            }

            conn.Close();

            return result;
        }

        public Boolean emailAvailable(string email)
        {
            Boolean result = false;

            MySqlConnection conn = new MySqlConnection(_connectionString);
            MySqlCommand cmd = new MySqlCommand(/*COMMAND*/, conn);

            conn.Open();

            MySqlDataReader dataReader = cmd.ExecuteReader();
            string strResult = string.Empty;
            strResult = Convert.ToString(cmd.ExecuteScalar());

            if (strResult == string.Empty)
            {
                result = true;
            }
            else
            {
                result = false;
            }

            conn.Close();

            return result;
        }
    }
}
