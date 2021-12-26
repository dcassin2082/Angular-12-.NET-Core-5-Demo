import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-coding-challenges',
  templateUrl: './coding-challenges.component.html',
  styleUrls: ['./coding-challenges.component.css']
})
export class CodingChallengesComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, private toastr: ToastrService) { }
  isReadMore: boolean;
  isDetails1: boolean;
  isDetails2: boolean;
  isDetails3: boolean;
  isDetails4: boolean;
  isDetails5: boolean;
  isDetails6: boolean;

  isChecked: boolean = true;
  show: any;
  show2: any;
  lowestPosIntSafe: SafeHtml;
  lowestPosIntSafeJs: SafeHtml;
  randomizeCharSafe: SafeHtml;
  randomizeCharSafeJs: SafeHtml;

  randomizeChar: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#57a64a;">//&nbsp;C#:&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  <span style="color:#569cd6;">static</span>&nbsp;<span style="color:#569cd6;">char</span>[]&nbsp;<span style="color:#dcdcaa;">Randomize</span>(<span style="color:#569cd6;">char</span>[]&nbsp;<span style="color:#9cdcfe;">arr</span>)
  {
  &nbsp;&nbsp;&nbsp;&nbsp;Random&nbsp;<span style="color:#9cdcfe;">r</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Random();
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">next</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;r<span style="color:#b4b4b4;">.</span>Next(arr<span style="color:#b4b4b4;">.</span>Length);
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;arr<span style="color:#b4b4b4;">.</span>Length&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>;&nbsp;i<span style="color:#b4b4b4;">++</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">char</span>&nbsp;<span style="color:#9cdcfe;">c</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;arr[i];
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[i]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;arr[next];
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[next]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;c;
  &nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;arr;
  }
  </pre>
  `
  lowestPosInt: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#57a64a;">//&nbsp;C#:&nbsp;Solution&nbsp;1:&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)&nbsp;-&nbsp;handles&nbsp;array&nbsp;input&nbsp;</span>
  <span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">GetLowestPositiveInt</span>(<span style="color:#569cd6;">int</span>[]&nbsp;<span style="color:#9cdcfe;">arr</span>)
  {
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">set</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;HashSet&lt;<span style="color:#569cd6;">int</span>&gt;(arr);
   
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">1</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;arr<span style="color:#b4b4b4;">.</span>Length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(<span style="color:#b4b4b4;">!</span>set<span style="color:#b4b4b4;">.</span>Contains(i))
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;i;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">default</span>;
  }
   
  <span style="color:#57a64a;">//&nbsp;C#:&nbsp;Solution&nbsp;2:&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)&nbsp;-&nbsp;handles&nbsp;lists&nbsp;as&nbsp;well&nbsp;as&nbsp;array&nbsp;input&nbsp;</span>
  <span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">GetLowestPositiveInt</span>(ICollection&lt;<span style="color:#569cd6;">int</span>&gt;&nbsp;<span style="color:#9cdcfe;">list</span>)
  {
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">set</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;HashSet&lt;<span style="color:#569cd6;">int</span>&gt;(list);
   
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">1</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;list<span style="color:#b4b4b4;">.</span>Count;&nbsp;i<span style="color:#b4b4b4;">++</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(<span style="color:#b4b4b4;">!</span>set<span style="color:#b4b4b4;">.</span>Contains(i))
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;i;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">default</span>;
  }
  </pre>`

  lowestPosintJs: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#57a64a;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;JavaScript:&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;getLowestPositiveInt&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;(arr)&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">const</span>&nbsp;set&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Set(arr);
   
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">for</span>&nbsp;(let&nbsp;i&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">1</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;=</span>&nbsp;arr<span style="color:#b4b4b4;">.</span>length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">if</span>&nbsp;(<span style="color:#b4b4b4;">!</span>set<span style="color:#b4b4b4;">.</span>has(i))
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">return</span>&nbsp;i;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#b5cea8;">0</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;}</pre>

  `

  towerOfHanoiSafe: SafeHtml;
  towerOfHanoi: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#57a64a;">//C#:&nbsp;Time:&nbsp;O(2^n),&nbsp;Space:&nbsp;O(n)</span>
  <span style="color:#569cd6;">static</span>&nbsp;<span style="color:#569cd6;">void</span>&nbsp;<span style="color:#dcdcaa;">MoveDisks</span>(<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">disk</span>,&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">start</span>,&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">finish</span>,&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">temp</span>)
  {
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(disk&nbsp;<span style="color:#b4b4b4;">&gt;</span>&nbsp;<span style="color:#b5cea8;">0</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MoveDisks(disk&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>,&nbsp;start,&nbsp;temp,&nbsp;finish);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console<span style="color:#b4b4b4;">.</span>WriteLine(<span style="color:#d69d85;">$&quot;move&nbsp;disk&nbsp;</span>{disk}<span style="color:#d69d85;">&nbsp;from&nbsp;peg&nbsp;</span>{start}<span style="color:#d69d85;">&nbsp;to&nbsp;peg&nbsp;</span>{finish}<span style="color:#d69d85;">&quot;</span>);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MoveDisks(disk&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>,&nbsp;temp,&nbsp;finish,&nbsp;start);
  &nbsp;&nbsp;&nbsp;&nbsp;}
  }</pre>`
  findMissingIntSafe: SafeHtml;
  findMissingInt: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#57a64a;">//&nbsp;C#:&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  <span style="color:#569cd6;">static</span>&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#dcdcaa;">FindMissingInt</span>(List&lt;<span style="color:#569cd6;">int</span>&gt;&nbsp;<span style="color:#9cdcfe;">list</span>,&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">count</span>)
  {
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">long</span>&nbsp;<span style="color:#9cdcfe;">expectedSum</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;(<span style="color:#569cd6;">long</span>)((Math<span style="color:#b4b4b4;">.</span>Pow(count,&nbsp;<span style="color:#b5cea8;">2</span>)&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;count)&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">2</span>);
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">long</span>&nbsp;<span style="color:#9cdcfe;">actualSum</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;
   
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>(<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;list<span style="color:#b4b4b4;">.</span>Count;&nbsp;i<span style="color:#b4b4b4;">++</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actualSum&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;list[i];
  &nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;Convert<span style="color:#b4b4b4;">.</span>ToInt32(expectedSum&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;actualSum);
  }</pre>`

  minWindowSubstringSafe: SafeHtml;
  minWindowSubstring: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;">&nbsp;&nbsp;<span style="color:#57a64a;">//&nbsp;C#:&nbsp;Time:&nbsp;O(n+m),&nbsp;Space:&nbsp;O(n)</span>
  <span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">static</span>&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#dcdcaa;">MinWindowSubstring</span>(<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">first</span>,&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">second</span>)
  {
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">set</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;HashSet&lt;<span style="color:#569cd6;">char</span>&gt;(second);
  &nbsp;&nbsp;&nbsp;&nbsp;List&lt;<span style="color:#569cd6;">string</span>&gt;&nbsp;<span style="color:#9cdcfe;">substrings</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;List&lt;<span style="color:#569cd6;">string</span>&gt;();
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">result</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">string</span><span style="color:#b4b4b4;">.</span>Empty;
   
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(first<span style="color:#b4b4b4;">.</span>Contains(set<span style="color:#b4b4b4;">.</span>First()))
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;first<span style="color:#b4b4b4;">.</span>Substring(first<span style="color:#b4b4b4;">.</span>IndexOf(set<span style="color:#b4b4b4;">.</span>First()));
  &nbsp;&nbsp;&nbsp;}
   
  &nbsp;&nbsp;&nbsp;&nbsp;result&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;result<span style="color:#b4b4b4;">.</span>Remove(result<span style="color:#b4b4b4;">.</span>LastIndexOf(set<span style="color:#b4b4b4;">.</span>Last())&nbsp;<span style="color:#b4b4b4;">+</span>&nbsp;<span style="color:#b5cea8;">1</span>);
   
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;result<span style="color:#b4b4b4;">.</span>Length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">var</span>&nbsp;<span style="color:#9cdcfe;">substr</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;result<span style="color:#b4b4b4;">.</span>Substring(i);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;substrings<span style="color:#b4b4b4;">.</span>Add(substr);
  &nbsp;&nbsp;&nbsp;&nbsp;}
   
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">foreach</span>&nbsp;(var&nbsp;<span style="color:#9cdcfe;">item</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;substrings)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(item<span style="color:#b4b4b4;">.</span>Contains(set<span style="color:#b4b4b4;">.</span>First()))
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;item<span style="color:#b4b4b4;">.</span>Substring(item<span style="color:#b4b4b4;">.</span>IndexOf(set<span style="color:#b4b4b4;">.</span>First()));
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;}
   
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;result;
  }</pre>`
  ngOnInit(): void {
    this.show = this.isChecked ? 1 : 0;
    this.show2 = this.isChecked ? 1 : 0;
    this.lowestPosIntSafe = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.lowestPosInt));
    // this.lowestPosIntSafeJs = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.lowestPosintJs));
    this.randomizeCharSafe =  this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.randomizeChar));
    this.randomizeAnySafe = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.randomizeAny));
    this.calculateAreaSafe = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.calculateArea));
    this.dataTableSafe = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.dataTable));
    this.dataTableUsageSafe = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.dataTableUsage));
    this.getFieldValueSafe = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.getFieldValue));
    this.palindromeSafe = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.palindrome));
    this.minWindowSubstringSafe = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.minWindowSubstring));
    this.findMissingIntSafe = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.findMissingInt));
    this.towerOfHanoiSafe = this.sanitizer.bypassSecurityTrustHtml(this.processHtml(this.towerOfHanoi));
    // let begin = new Date().getTime();
    // this.lowestPosInt = this.processHtml(this.lowestPosInt);
    // this.lowestPosIntSafe = this.sanitizer.bypassSecurityTrustHtml(this.lowestPosInt);
    // let end = new Date().getTime();
    // alert(`start time: ${begin} end time: ${end}`)
  }

  // // JavaScript: Time: O(n), Space: O(n)
  // randomizeCharArray = (arr) => {
  //   const r = Math.random();
  //   const next = Math.floor(Math.random() * (arr.length));
  //   for(let i = 0; i < arr.length; i++) {
  //     const c = arr[i];
  //     arr[i] = arr[next];
  //     arr[next] = c;
  //   }
  //   return arr;
  // }

  copyText(val: string) {
    try {
      let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      let text = document.getElementById(val).innerText;
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
  showDetails(num: number) {
    switch (num) {
      case 1:
        this.isDetails1 = !this.isDetails1;
        break;
      case 2:
        this.isDetails2 = !this.isDetails2;
        break;
      case 3:
        this.isDetails3 = !this.isDetails3;
        break;
      case 4:
        this.isDetails4 = !this.isDetails4;
        break;
      case 5:
        this.isDetails5 = !this.isDetails5;
        break;
      case 6:
        this.isDetails6 = !this.isDetails6;
       
    }
    this.isReadMore = !this.isReadMore
  }

  openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  processHtml(html: string) {
    return [html.slice(0, 12), 'padding:20px;', html.slice(12)].join('').replace('{', '&#123;').replace('}', ' &#125;');
  }
  showDetails1() {
    this.isReadMore = !this.isReadMore
  }
  showDiv: boolean = false;
  linkText: string = this.showDiv ? 'READ LESS' : 'READ MORE';
  radius = 4000;
  calculate = (op) => {
    return op(this.radius);
  }

  isPrime = `
  static bool IsPrime(int num)
  // C#: Time: O(n), Space: O(n)
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
  palindromeSafe: SafeHtml;
  palindrome: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#57a64a;">//&nbsp;C#:&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  <span style="color:#569cd6;">static</span>&nbsp;<span style="color:#569cd6;">bool</span>&nbsp;<span style="color:#dcdcaa;">IsAPalindrome</span>(<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">phrase</span>)
  {
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">first</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;phrase<span style="color:#b4b4b4;">.</span>Substring(<span style="color:#b5cea8;">0</span>,&nbsp;phrase<span style="color:#b4b4b4;">.</span>Length&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">2</span>);
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">second</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">string</span><span style="color:#b4b4b4;">.</span>Empty;
   
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;phrase<span style="color:#b4b4b4;">.</span>Length&nbsp;<span style="color:#b4b4b4;">-</span>&nbsp;<span style="color:#b5cea8;">1</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&gt;=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i<span style="color:#b4b4b4;">--</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;second&nbsp;<span style="color:#b4b4b4;">+=</span>&nbsp;phrase[i];
  &nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;first<span style="color:#b4b4b4;">.</span>Equals(second<span style="color:#b4b4b4;">.</span>Substring(<span style="color:#b5cea8;">0</span>,&nbsp;second<span style="color:#b4b4b4;">.</span>Length&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">2</span>));
  }
  </pre>
  `
  // JavaScript: Time: O(n), Space: O(n)
  // isAPalindrome(str: string) {
  //   let first = str.substr(0, str.length / 2);
  //   let second = '';

  //   for(let i = str.length - 1; i >= 0; i--) {
  //     second += str[i];
  //   }
  //   return first === second.substr(0, second.length / 2);
  // }
  getFieldValueSafe: SafeHtml;
  getFieldValue: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#57a64a;">//&nbsp;C#:&nbsp;Time:&nbsp;O(1),&nbsp;Space:&nbsp;O(1)</span>
  <span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">static</span>&nbsp;T&nbsp;<span style="color:#dcdcaa;">GetFieldValue</span>&lt;<span style="color:#b8d7a3;">T</span>&gt;(DataRow&nbsp;<span style="color:#9cdcfe;">dr</span>,&nbsp;<span style="color:#569cd6;">string</span>&nbsp;<span style="color:#9cdcfe;">fieldname</span>)
  {
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">if</span>&nbsp;(dr[fieldname]&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;<span style="color:#569cd6;">null</span>&nbsp;<span style="color:#b4b4b4;">||</span>&nbsp;dr[fieldname]&nbsp;<span style="color:#b4b4b4;">==</span>&nbsp;DBNull<span style="color:#b4b4b4;">.</span>Value)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;<span style="color:#569cd6;">default</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">else</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;(T)Convert<span style="color:#b4b4b4;">.</span>ChangeType(dr[fieldname],&nbsp;<span style="color:#569cd6;">typeof</span>(T));
  }</pre>
  `
  dataTableSafe: SafeHtml;
  dataTable: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#57a64a;">//&nbsp;C#:&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
<span style="color:#569cd6;">public</span>&nbsp;<span style="color:#569cd6;">static</span>&nbsp;DataTable&nbsp;<span style="color:#dcdcaa;">ConvertToDataTable</span>&lt;<span style="color:#b8d7a3;">T</span>&gt;(IList&lt;T&gt;&nbsp;<span style="color:#9cdcfe;">list</span>)
{
&nbsp;&nbsp;&nbsp;&nbsp;PropertyDescriptorCollection&nbsp;<span style="color:#9cdcfe;">properties</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;TypeDescriptor<span style="color:#b4b4b4;">.</span>GetProperties(<span style="color:#569cd6;">typeof</span>(T));
&nbsp;&nbsp;&nbsp;&nbsp;DataTable&nbsp;<span style="color:#9cdcfe;">dt</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;DataTable();
 
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">foreach</span>&nbsp;(PropertyDescriptor&nbsp;<span style="color:#9cdcfe;">prop</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;properties)
&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dt<span style="color:#b4b4b4;">.</span>Columns<span style="color:#b4b4b4;">.</span>Add(prop<span style="color:#b4b4b4;">.</span>Name,&nbsp;Nullable<span style="color:#b4b4b4;">.</span>GetUnderlyingType(prop<span style="color:#b4b4b4;">.</span>PropertyType)&nbsp;<span style="color:#b4b4b4;">??</span>&nbsp;prop<span style="color:#b4b4b4;">.</span>PropertyType);
&nbsp;&nbsp;&nbsp;&nbsp;}
 
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">foreach</span>&nbsp;(var&nbsp;<span style="color:#9cdcfe;">item</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;list)
&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DataRow&nbsp;<span style="color:#9cdcfe;">dr</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;dt<span style="color:#b4b4b4;">.</span>NewRow();
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">foreach</span>&nbsp;(PropertyDescriptor&nbsp;<span style="color:#9cdcfe;">prop</span>&nbsp;<span style="color:#d8a0df;">in</span>&nbsp;properties)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dr[prop<span style="color:#b4b4b4;">.</span>Name]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;prop<span style="color:#b4b4b4;">.</span>GetValue(item)&nbsp;<span style="color:#b4b4b4;">??</span>&nbsp;DBNull<span style="color:#b4b4b4;">.</span>Value;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dt<span style="color:#b4b4b4;">.</span>Rows<span style="color:#b4b4b4;">.</span>Add(dr);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;dt;
}</pre>
  `
  dataTableUsageSafe: SafeHtml;
  dataTableUsage: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#57a64a;">//&nbsp;&nbsp;Usage:&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)&nbsp;...&nbsp;names&nbsp;is&nbsp;an&nbsp;IList&lt;Name&gt;</span>
  DataTable&nbsp;tbl&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;ConvertToDataTable(names);
  <span style="color:#569cd6;">using</span>&nbsp;(SqlConnection&nbsp;cn&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;SqlConnection(connString))
  {
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">string</span>&nbsp;sql&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;insert_names&quot;</span>;
  &nbsp;&nbsp;&nbsp;&nbsp;cn<span style="color:#b4b4b4;">.</span>Open();
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">using</span>&nbsp;(SqlCommand&nbsp;cmd&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;SqlCommand(sql,&nbsp;cn))
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cmd<span style="color:#b4b4b4;">.</span>CommandType&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;CommandType<span style="color:#b4b4b4;">.</span>StoredProcedure;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SqlParameter&nbsp;parm&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;SqlParameter
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ParameterName&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#d69d85;">&quot;@names&quot;</span>,
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SqlDbType&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;SqlDbType<span style="color:#b4b4b4;">.</span>Structured,
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Value&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;tbl
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cmd<span style="color:#b4b4b4;">.</span>Parameters<span style="color:#b4b4b4;">.</span>Add(parm);
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cmd<span style="color:#b4b4b4;">.</span>ExecuteNonQuery();
  &nbsp;&nbsp;&nbsp;&nbsp;}
  }
  </pre>`
  calculateAreaSafe: SafeHtml;
  calculateArea: string = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#57a64a;">//&nbsp;C#:&nbsp;Time:&nbsp;O(1),&nbsp;Space:&nbsp;O(1)</span>
  <span style="color:#569cd6;">private</span>&nbsp;<span style="color:#569cd6;">static</span>&nbsp;<span style="color:#569cd6;">double</span>&nbsp;_radius;
   
  <span style="color:#57a64a;">//&nbsp;This&nbsp;method&nbsp;can&nbsp;be&nbsp;used&nbsp;to&nbsp;calculate&nbsp;areas&nbsp;or&nbsp;volumes&nbsp;for&nbsp;any&nbsp;matching&nbsp;delegate&nbsp;&lt;double,&nbsp;double&gt;&nbsp;</span>
  <span style="color:#569cd6;">static</span>&nbsp;<span style="color:#569cd6;">double</span>&nbsp;<span style="color:#dcdcaa;">Calculate</span>(Func&lt;<span style="color:#569cd6;">double</span>,&nbsp;<span style="color:#569cd6;">double</span>&gt;&nbsp;<span style="color:#9cdcfe;">operation</span>)
  {
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;operation(_radius);
 }
   
  <span style="color:#57a64a;">//&nbsp;Area&nbsp;of&nbsp;a&nbsp;circle:</span>
  <span style="color:#4ec9b0;">Calculate</span>(a&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;Math<span style="color:#b4b4b4;">.</span>PI<span style="color:#b4b4b4;"> *</span>&nbsp;<span style="color:#9cdcfe;">_radius</span>&nbsp;<span style="color:#b4b4b4;">*</span>&nbsp;_radius);
   
  <span style="color:#57a64a;">//&nbsp;Volume&nbsp;of&nbsp;a&nbsp;sphere</span>
  <span style="color:#4ec9b0;">Calculate</span>(v&nbsp;<span style="color:#b4b4b4;">=&gt;</span>&nbsp;<span style="color:#b5cea8;">4</span>&nbsp;<span style="color:#b4b4b4;">/</span>&nbsp;<span style="color:#b5cea8;">3</span>&nbsp;<span style="color:#b4b4b4;">*</span>&nbsp;<span style="color:#b4b4b4;"></span>Math<span style="color:#b4b4b4;">.</span>PI <span style="color:#b4b4b4;">*</span>&nbsp;<span style="color:#9cdcfe;">Math</span><span style="color:#b4b4b4;">.</span>Pow(_radius,&nbsp;<span style="color:#b5cea8;">3</span>));
  </pre>`

 
  randomizeAnySafe: SafeHtml;
  randomizeAny = `<pre style="font-family:Consolas;font-size:13px;color:gainsboro;background:#1e1e1e;"><span style="color:#57a64a;">//&nbsp;C#:&nbsp;Time:&nbsp;O(n),&nbsp;Space:&nbsp;O(n)</span>
  <span style="color:#569cd6;">static</span>&nbsp;ICollection&lt;T&gt;&nbsp;<span style="color:#dcdcaa;">Randomize</span>&lt;<span style="color:#b8d7a3;">T</span>&gt;(T[]&nbsp;<span style="color:#9cdcfe;">items</span>)
  {
  &nbsp;&nbsp;&nbsp;&nbsp;Random&nbsp;<span style="color:#9cdcfe;">r</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#569cd6;">new</span>&nbsp;Random();
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">next</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;r<span style="color:#b4b4b4;">.</span>Next(items<span style="color:#b4b4b4;">.</span>Length);
   
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">for</span>&nbsp;(<span style="color:#569cd6;">int</span>&nbsp;<span style="color:#9cdcfe;">i</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;<span style="color:#b5cea8;">0</span>;&nbsp;i&nbsp;<span style="color:#b4b4b4;">&lt;</span>&nbsp;items<span style="color:#b4b4b4;">.</span>Length;&nbsp;i<span style="color:#b4b4b4;">++</span>)
  &nbsp;&nbsp;&nbsp;&nbsp;{
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;T&nbsp;<span style="color:#9cdcfe;">item</span>&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;items[i];
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;items[i]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;items[next];
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;items[next]&nbsp;<span style="color:#b4b4b4;">=</span>&nbsp;item;
  &nbsp;&nbsp;&nbsp;&nbsp;}
  &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d8a0df;">return</span>&nbsp;items;
  }
  </pre>`
  missingInt = `
  //  The following code will handle lists as well as arrays
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
  missingInt1 = `
 // C#: Solution 1: Time: O(n), Space: O(n) - handles array input 
 public int GetLowestPositiveInt(int[] arr)
 {
    var set = new HashSet<int>(arr);

    for(int i = 1; i <= list.Length; i++)
    {
        if(!set.Contains(i))
        {
            return i;
        }
    }
    return default;
}

 // C#: Solution 2: Time: O(n), Space: O(n) - handles lists as well as array input 
 public int GetLowestPositiveInt(ICollection<int> list)
 {
    var set = new HashSet<int>(list);

    for(int i = 1; i <= list.Count; i++)
    {
        if(!set.Contains(i))
        {
                return i;
        }
    }
    return default;
}

// JavaScript: Time: O(n), Space: O(n)
getLowestPositiveInt = (arr) => {
    const set = new Set(arr);

    for (let i = 1; i <= arr.length; i++) {
      if (!set.has(i)) {
        return i;
      }
    }
    return 0;
  }
 `
}
