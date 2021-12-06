import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-interview-questions',
  templateUrl: './interview-questions.component.html',
  styleUrls: ['./interview-questions.component.css']
})
export class InterviewQuestionsComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  copyText(val: string) {
    try {
      let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      let text = document.getElementById(val).innerHTML;
      selBox.value = text;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
      this.toastr.success('Copied Successfully', 'Copy Text')
    }
    catch {
      this.toastr.error('Unable to copy', 'Copy Text')
    }
  }

  isPrime = `
  static bool IsPrime(int num)
  {
        if (num < 2)
            return false;
        else if (num == 2)
            return true;
        else
        {
            for (int i = 2; i <= Math.Sqrt(num); i++)
            {
                if (num % i == 0)
                {
                    return false;
                }
            }
        }
        return true;
  }
  `
  palindrome = `
  static bool IsAPalindrome(string phrase)
  {
    string first = phrase.Substring(0, phrase.Length / 2);
    string second = string.Empty;

    for(int i = phrase.Length - 1; i >= 0; i--)
    {
      second += phrase[i];
    }
    return first.Equals(second.Substring(0, second.Length / 2));
  }
  `
  getFieldValue = `
  public static T GetFieldValue<T>(DataRow dr, string fieldname)
  {
      if (dr[fieldname] == null || dr[fieldname] == DBNull.Value)
          return default;
      else
          return (T)Convert.ChangeType(dr[fieldname], typeof(T));
  }
  `
  dataTable = `
  public static DataTable ConvertToDataTable<T>(IList<T> list)
  {
        PropertyDescriptorCollection properties = TypeDescriptor.GetProperties(typeof(T));
        DataTable dt = new DataTable();

        foreach (PropertyDescriptor prop in properties)
        {
            dt.Columns.Add(prop.Name, Nullable.GetUnderlyingType(prop.PropertyType) ?? prop.PropertyType);
        }

        foreach (var item in list)
        {       
            DataRow dr = dt.NewRow();
            foreach (PropertyDescriptor prop in properties)
            {
                dr[prop.Name] = prop.GetValue(item) ?? DBNull.Value;
            }
            dt.Rows.Add(dr);
        }
        return dt;
  }
  `
  calculateArea = `
  // Given the following field: 
  private static double radius;

  // This method can be used to calculate areas or volumes for any matching delegate <double, double> 
  static double Calculate(Func<double, double> op)
  {
      return op(radius);
  }

  Usage:
  ___________________
  // Area of a circle:
  Calculate(a => Math.PI * radius * radius);

  // Volume of a sphere
  Calculate(v => 4 / 3 * v.Math.PI * Math.Pow(radius, 3));)
  `
  randomizeChar = `
  static char[] Randomize(char[] arr)
  {
      Random r = new Random();
      int next = r.Next(arr.Length);
      for (int i = 0; i < arr.Length - 1; i++)
      {
          char c = arr[i];
          arr[i] = arr[next];
          arr[next] = c;
      }
      return arr;
  }`

  randomizeAny = `
  static ICollection<T> Randomize<T>(T[] items)
  {
      Random r = new Random(); 
      int next = r.Next(items.Length);

      for(int i = 0; i < items.Length; i++)
      {
          T item = items[i];
          items[i] = items[next];
          items[next] = item;
      }
      return items;
  }`
  missingInt = `
  // The following code will handle lists as well as arrays
  static int GetMissingInt(ICollection<int> list)
  {
      ICollection<int> set = new HashSet<int>();
      foreach (var item in list)
      {
          if (item > 0)
              set.Add(item);
      }
      for (int i = 1; i <= list.Count + 1; i++)
      {
          if (!set.Contains(i))
              return i;
      }
      return default;
  }
  `

  navigate(url: any) {
    this.router.navigate([url]);
  }

}
